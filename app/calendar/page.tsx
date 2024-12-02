// "use client"
// import React, { useCallback, useState } from 'react';
// import { Calendar } from '@natscale/react-calendar';
// import '@natscale/react-calendar/dist/main.css';
// import { testEvents, testTasks } from '@/lib/test-dates';

import React from "react";
import { testEvents, testTasks } from '@/lib/test-dates';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

moment.locale("en-GB");
const localizer = momentLocalizer(moment);

// const allViews = Object.keys(Calendar.views).map(k => Calendar.views[k]);

export default function CalendarPage() {

  // const tasks = testTasks;
  const events = testEvents;

  return (
    <section>
      <Calendar
      localizer={localizer}
        events={events}
        step={60}
        // views={allViews}
        defaultDate={new Date(2024, 12, 1)}
        popup={false}
        // onShowMore={(events: Event[], date: Date) => this.setState({ showModal: true, events })}
      />
    </section>
  )
}

// export default function CalendarPage() {

//   const tasks = testTasks;
//   const events = testEvents;

//   const [value, setValue] = useState(new Date());

//   const onChange = useCallback(
//     (val) => {
//       setValue(val);
//     },
//     [setValue],
//   );

//   return (
//     <section className="flex">
//   <Calendar value={value} onChange={onChange} />
//   </section>
//   )
// }