import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';

import { CellWrapper, RowInCell } from './containers/styled-components';
import { CalendarCellProps } from './Calendar.types';
import { DISPLAY_MODE_DAY } from './constants';
import { isCurrentDay, isSelectedMonth } from '../../helpers/other';

const CalendarCell: React.FC<CalendarCellProps> = ({ dayItem, eventsCalendar, openFormHandler, today, setDisplayMode, dayHandler }: any) => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <CellWrapper
      key={dayItem.format('DDMMYYYY')}
      isWeekend={dayItem.day() === 6 || dayItem.day() === 0}
      isSelectedMonth={isSelectedMonth(dayItem, today)}
      isSmallScreen={isSmallScreen}
    >
      <RowInCell
        justifyContent="flex-end"
      >
        <ShowDayWrapper>
          <DayWrapper onClick={() => dayHandler(dayItem)}>
            {/*day number*/}
            {isCurrentDay(dayItem) ? <CurrentDay>{dayItem.format('D')}</CurrentDay> : dayItem.format('D')}
            {isSmallScreen && !!eventsCalendar.length && <IsEventsCalendar/>}
          </DayWrapper>
        </ShowDayWrapper>
        {!isSmallScreen && (
          <EventListWrapper>
            {
              eventsCalendar
                .slice(0, 2)
                // .map((event: Events) => ( todo затипізувати event
                .map((event: any) => (
                  <EventListItemWrapper key={event.id}>
                    <EventItemWrapper>
                      {event.name}
                    </EventItemWrapper>
                  </EventListItemWrapper>
                ))
            }
            {eventsCalendar.length > 2 ? (
              <EventListItemWrapper>
                <EventItemWrapper onClick={() => setDisplayMode(DISPLAY_MODE_DAY)}>
                  show more
                </EventItemWrapper>
              </EventListItemWrapper>
            ) : null}
          </EventListWrapper>
        )}
      </RowInCell>
    </CellWrapper>
  );
};

export default CalendarCell;

const DayWrapper = styled.div`
  height: 33px;
  width: 33px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2px;
  cursor: pointer;

  @media (max-width: 500px) {
    width: 30px;
    height: 30px;
    position: relative;
    
    //&::before {
    //  content: '';
    //  display: block;
    //  width: 5px;
    //  height: 5px;
    //  border-radius: 50%;
    //  background-color: #999999;
    //  position: absolute;
    //  bottom: -8px;
    //}
  }
`;

const IsEventsCalendar = styled('div')`
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background-color: #999999;
  position: absolute;
  bottom: -8px;
`

const CurrentDay = styled('div')`
  height: 100%;
  width: 100%;
  background-color: #FFA800;
  color: black;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ShowDayWrapper = styled('div')`
  display: flex;
  justify-content: flex-end;

  @media (max-width: 500px) {
    justify-content: center;
  }
`

const EventListWrapper = styled('ul')`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const EventListItemWrapper = styled('li')`
	padding-left: 2px;
	padding-right: 2px;
	margin-bottom: 2px;
	display: flex;
`;

const EventItemWrapper = styled('button')`
	position: relative;
	flex-grow: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 114px;
	border: unset;
	color: #DDDDDD;
	cursor: pointer;
	margin: 0;
	padding: 0;
	text-align: left;
	background-color: #5d5f63;
	border: 1px solid #5d5f63;
	border-radius: 2px;
`;
