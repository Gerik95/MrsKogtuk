import React, { useEffect, useState } from 'react';
import moment from 'moment';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import CalendarMonitor from './CalendarMonitor';
import CalendarGrid from './CalendarGrid';
import { CalendarEvents } from './Calendar.types';
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from './constants';
import DayShow from './DayShow';
import { ButtonWrap, EventInput, ShadowWrapperStyled } from './containers/styled-components';
import { useMediaQuery } from 'react-responsive';
import { AuthSliceProps } from '../../store/slices/slice.type';
import { setIsEventForm } from '../../store/slices/uiSlice';
import { calendarIcon } from '../Header/icons';

const url = 'http://localhost:3004';
const totalDays = 42;

const defaultEvent = {
  name: '',
  description: '',
  start: moment().format('X'),
  duration: 1,
  createDate: '',
  createdBy: 0,
  clientId: 0,
  eventId: '',
  masterId: 0,
  modifiedBy: 0,
  modifiedDate: '',
  scheduledDateTimeStart: '',
  rank: 0,
}

const Calendar = () => {
  const dispatch = useDispatch();
  const { selectClient } = useSelector((state: AuthSliceProps) => state.clientsData);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });

  const [displayMode, setDisplayMode] = useState<'month' | 'day'>('month');

  const [method, setMethod] = useState<string | null>(null);

  const [event, setEvent] = useState<any>();
  // console.log(event);
  const [isShowForm, setIsShowForm] = useState(false);
  moment.updateLocale('en', { week: { dow: 1 } });

  const [today, setToday] = useState(moment().locale('uk'));
  const startDay = today.clone().startOf('month').startOf('week');

  const prevHandler = () => setToday(prev => prev.clone().subtract(1, displayMode));
  const todayHandler = () => setToday(moment().locale('uk'));
  const nextHandler = () => setToday(prev => prev.clone().add(1, displayMode));

  const [eventsCalendar, setEventsCalendar] = useState<CalendarEvents[]>([]);

  const startDateQuery = startDay.clone().format('X');
  const endDateQuery = startDay.clone().add(totalDays, 'days').format('X');

  useEffect(() => {
    const getEvents = async () => {
      // const response = await getEventsClients(startDateQuery, endDateQuery);
      // setEventsCalendar(response);
    }

    getEvents();
  }, [today])

  const openFormHandler = (methodName: string, eventForUpdate: any, dayItem: any) => {
    setEvent(eventForUpdate || { ...defaultEvent, start: dayItem.format('X') });
    setMethod(methodName);
    dispatch(setIsEventForm(true));
  }

  const openModalFormHandler = (methodName: string, eventForUpdate: any, dayItem: any) => {
    setIsShowForm(true);
    openFormHandler(methodName, eventForUpdate, dayItem);
  }
  const cancelButtonHandler = (): void => {
    setIsShowForm(false);
    dispatch(setIsEventForm(false));
    setEvent(null);
  }

  const changeEventHandler = (text: string, field: string): void => {
    setEvent((prev: Event) => (
      { ...prev, [field]: text }
    ));
  }


  // const eventFetchHandler = async () => {
  //   const fetchUrl = method === 'Update' ? `${RequestUrl.event}?eventid=${event.eventId}` : `${RequestUrl.event}`;
  //   const httpMethod = method === 'Update' ? 'PUT' : 'POST';
  //
  //   // const start = method === 'Update' ? event.start - 10800 : event.start;
  //
  //   const requestData = {
  //     name: event.name,
  //     start:  event.start,
  //     duration: event.duration,
  //     clientId: selectClient.userId || event.clientId,
  //     masterId: selectClient.createdBy || event.masterId
  //   }
  //
  //   console.log(requestData);
  //
  //   try {
  //     const response = await fetchClientHandler(fetchUrl, requestData, httpMethod);
  //     if(httpMethod === 'PUT') {
  //       setEventsCalendar((prev) => prev.map(eventEl => eventEl.eventId === response.eventId ? response : eventEl));
  //     } else {
  //       setEventsCalendar((prev) => [...prev, response]);
  //     }
  //   } catch(e) {
  //     console.log(e);
  //   }
  //   cancelButtonHandler();
  // }

  const dayHandler = (dayItem: any) => {
    setToday(() => moment(dayItem));
    setDisplayMode('day');
  }
  return (
    <div id='calendar'>
      <ShadowWrapper isSmallScreen={isSmallScreen}>
        <CalendarMonitor
          today={today}
          prevHandler={prevHandler}
          todayHandler={todayHandler}
          nextHandler={nextHandler}
          setDisplayMode={setDisplayMode}
          displayMode={displayMode}
        />
        {displayMode === DISPLAY_MODE_MONTH ? (
          <CalendarGrid
            today={today}
            dayHandler={dayHandler}
            startDay={startDay}
            totalDays={totalDays}
            eventsCalendar={eventsCalendar}
            openFormHandler={openModalFormHandler}
            setDisplayMode={setDisplayMode}
          />
        ) : null}
        {displayMode === DISPLAY_MODE_DAY ? (
          <DayShow
            method={method}
            today={today}
            eventsCalendar={eventsCalendar}
            selectedEvent={event}
            cancelButtonHandler={cancelButtonHandler}
            changeEventHandler={changeEventHandler}
            openFormHandler={openFormHandler}
            setEventsCalendar={setEventsCalendar}
          />
        ) : null}
      </ShadowWrapper>
    </div>
  );
};

export default Calendar;

const ShadowWrapper =  styled.div<ShadowWrapperStyled>`
  min-width: ${props => props.isSmallScreen ? '100%' : '820px'};
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

