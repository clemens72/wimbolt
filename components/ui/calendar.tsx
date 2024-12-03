"use client"
import { useCallback, useState } from 'react';
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