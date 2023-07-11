import React from 'react';
import styled from 'styled-components';
import { CalendarGridProps } from './Calendar.types';
import CalendarGridHeader from './CalendarGridHeader';
import MonthDaysList from './MonthDaysList';

interface GridWrapperStyled {
  isHeader?: boolean;
}

const CalendarGrid: React.FC<CalendarGridProps> = (
  {
    startDay,
    today,
    totalDays,
    eventsCalendar,
    openFormHandler,
    setDisplayMode,
    dayHandler
  }
) => {

  return (
    <>
      <GridWrapper isHeader>
        <CalendarGridHeader/>
      </GridWrapper>
      <GridWrapper>
        <MonthDaysList
          dayHandler={dayHandler}
          startDay={startDay}
          totalDays={totalDays}
          eventsCalendar={eventsCalendar}
          openFormHandler={openFormHandler}
          today={today}
          setDisplayMode={setDisplayMode}
        />
      </GridWrapper>
    </>
  );
};

export default CalendarGrid;

const GridWrapper = styled.div<GridWrapperStyled>`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 1px;
  background-color: ${props => props.isHeader ? '#1E1F21' : '#404040'};
  ${props => props.isHeader && 'border-bottom: 1px solid #404040'}
`;
