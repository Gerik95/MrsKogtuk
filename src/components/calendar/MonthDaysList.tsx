import React from 'react';
import { CalendarGridProps } from './Calendar.types';
import CalendarCell from './CalendarCell';
import { Events } from './types';
import { isDayContainCurrentEvent } from '../../helpers/other';

const MonthDaysList: React.FC<CalendarGridProps> = (
  {
    startDay,
    totalDays,
    eventsCalendar,
    openFormHandler,
    today,
    setDisplayMode,
    dayHandler
  }
) => {
  const day = startDay.clone().subtract(1, 'day');
  const daysMap = [...Array(totalDays)].map(() => day.add(1, 'day').clone());

  return (
    <>
      {daysMap.map((dayItem) => (
        <CalendarCell
          key={dayItem._d}
          dayItem={dayItem}
          eventsCalendar={eventsCalendar.filter((event: Events) => isDayContainCurrentEvent(event, dayItem))}
          openFormHandler={openFormHandler}
          today={today}
          setDisplayMode={setDisplayMode}
          dayHandler={dayHandler}
        />
      ))}
    </>
  );
};

export default MonthDaysList;
