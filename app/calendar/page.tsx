"use client"

import { useCallback, useState } from "react";
import { testEvents } from '@/lib/test-dates';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Dialog } from "@/components/ui/dialog";
import { EventDialog } from '@/components/event-dialog';

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

export default function CalendarPage() {

  const events = testEvents
  const defaultDate = new Date()
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{
    start: Date;
    end: Date;
  } | null>(null);

  const onSelectSlot = useCallback((slotInfo: { start: Date; end: Date }) => {
    setSelectedSlot(slotInfo);
    setIsDialogOpen(true);
  }, []);

  return (
    <div className="h-[80vh] p-4">
      <Calendar
        localizer={localizer}
        dayLayoutAlgorithm="no-overlap"
        onSelectSlot={onSelectSlot}
        selectable={true}
        events={events}
        longPressThreshold={5}
        startAccessor="start"
        endAccessor="end"
        style={{ height: '100%' }}
        views={['month', 'week', 'day', 'agenda']}
        defaultDate={defaultDate}
        popup={true}
      />
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <EventDialog selectedSlot={selectedSlot} />
      </Dialog>
    </div>
  );
}