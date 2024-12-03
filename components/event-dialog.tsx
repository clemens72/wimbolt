import moment from 'moment';
import {
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from '@/components/ui/dialog';

interface EventDialogProps {
  selectedSlot: {
    start: Date;
    end: Date;
  } | null;
}

export function EventDialog({ selectedSlot }: EventDialogProps) {
  if (!selectedSlot) return null;

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle className="mb-2">Add New Event</DialogTitle>
        <DialogDescription asChild>
          <div className="mt-4">
            <div className="mb-2">
              <span className="font-semibold">Start:</span>{' '}
              {moment(selectedSlot.start).format('LLLL')}
            </div>
            <div>
              <span className="font-semibold">End:</span>{' '}
              {moment(selectedSlot.end).format('LLLL')}
            </div>
          </div>
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <DialogClose className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
          Cancel
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}