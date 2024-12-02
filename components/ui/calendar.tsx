"use client"
import React, { useCallback, useState } from 'react';
import { Calendar } from '@natscale/react-calendar';
import '@natscale/react-calendar/dist/main.css';

export function WidgetCalendar() {
  const [value, setValue] = useState(new Date());

  const onChange = useCallback(
    (val) => {
      setValue(val);
    },
    [setValue],
  );

  return (
    <div>
      <Calendar value={value} onChange={onChange} />
    </div>
  )
}

// import "@/app/calendar/app.css";
// import Actions from "./partials/actions";
// import CalendarComponent from "./partials/calendar";
// import Title from "./partials/title";

// interface ICalendarProps {
//   setDate: any;
//   date: any;
//   selectRange: boolean;
//   setSelectRange: any;
// }

// const CustomCalendar = (props: ICalendarProps) => {
//   const { setDate, date, selectRange, setSelectRange } = props;
//   return (
//     <div style={{ width: "80vw", display: "grid", placeItems: "center" }}>
//       <Title title={"Calendar"} />
//       <CalendarComponent
//         setDate={setDate}
//         date={date}
//         selectRange={selectRange}
//       />
//       <Actions
//         setDate={setDate}
//         date={date}
//         selectRange={selectRange}
//         setSelectRange={setSelectRange}
//       />
//     </div>
//   );
// };

// export default CustomCalendar;