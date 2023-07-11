import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
// import 'react-time-picker/dist/TimePicker.css';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';
import 'moment/locale/uk';

import { CalendarEvents, DayShowProps, EventItemButtonStyled, RedLineStyled, TimeSelectProps } from './Calendar.types';
import { ButtonsWrapper, EventItemWrapper, EventTitle } from './containers/styled-components';
import { ITEMS_PER_DAY, ONE_MINUTE } from './constants';
import { eventMapper } from '../../helpers/eventMapper';
import { isDayContainCurrentEvent, isDayContainCurrentTimestamp } from '../../helpers/other';
// import useClients from '../../hooks/useClients';
import { useDispatch, useSelector } from 'react-redux';
import { AuthSliceProps, User } from '../../store/slices/slice.type';
import { setClients, setSelectClient } from '../../store/slices/clientsSlice';
import Loader from '../UI/Loader';
import { setIsInputLength } from '../../store/slices/uiSlice';
import { Colors } from '../../constants';
import { CreateEventIcon, DeleteIcon, EditIcon } from '../../assets/icons';
import EditEventComponent from './EditEventComponent';
import { ButtonStyled, PositionRelative, SelectEventTimeWrapper } from '../../styled';
import DurationSelector from './DurationSelector';

const DayShow: React.FC<DayShowProps> = (
  {
    eventsCalendar,
    today,
    selectedEvent,
    changeEventHandler,
    cancelButtonHandler,
    // eventFetchHandler,
    method,
    // removeEventHandler,
    openFormHandler,
    // updateEventByDragAndDrop
  }
) => {
  const ref = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const { isLoading, isInputLength, isEventForm } = useSelector((state: AuthSliceProps) => state.ui);
  const { clients } = useSelector((state: AuthSliceProps) => state.clientsData);
  const [heightDiv, setHeightDiv] = useState(0);
  const [widthDiv, setWidthDiv] = useState(0);

  const [time, setTime] = useState(today.clone());

  const [eventMap, setEventMap] = useState([]);
  const [droppedHour, setDroppedHour] = useState<number | null>(null);

  const isMethodUpdate = method === 'Update';

  // const getClients = useClients();

  useEffect(() => {
    dispatch(setClients([]));
  }, [])

  useEffect(() => {
    const eventList = eventsCalendar.filter(event => isDayContainCurrentEvent(event, today));
    const map = eventMapper(eventList.map((event) => {
      const number = ( event.duration );
      return ( { ...event, duration: Math.round(number) } );
    }));
    const tempArray: any = [];
    map.forEach((column, rank) => {
      column.forEach((event: CalendarEvents) => {
        tempArray.push({ ...event, rank })
      })
    })
    setHeightDiv(ref.current!.clientHeight / ITEMS_PER_DAY);
    setWidthDiv(( ref.current!.clientWidth - 38 ) / map.size);
    setEventMap(tempArray);
    cancelButtonHandler();
  }, [eventsCalendar])

  const cells = [...new Array(ITEMS_PER_DAY)];

  const setDurationForEvent = (index: number): void => {
    changeEventHandler(index, 'duration');
  }

  const getTopPosition = (event: CalendarEvents): number => {
    // const timeStamp = +moment.unix(+event.start).format('H') - 3;
    const timeString = moment.unix(+event.start).format('H:mm');
    const timeParts = timeString.split(':');
    const hours = parseInt(timeParts[0], 10);
    const minutes = parseInt(timeParts[1], 10);
    const decimalTime = ( hours + minutes / 60 ) - 3;

    return heightDiv * decimalTime;
  }

  // @ts-ignore
  const getRedLinePosition = () => ( ( moment().format('X') - today.format('X') ) / 86400 ) * 100;

  const [, setCounter] = useState(0);

  useEffect(() => {
    const timerId = setInterval(() => {
      setCounter(prevState => prevState + 1);
    }, ONE_MINUTE);

    return () => clearInterval(timerId);
  }, []);

  // const onDragEndHandler = (event: CalendarEvents) => {
  //   const date = droppedHour && moment.unix(+event.start).hour(droppedHour).format('X')
  //   updateEventByDragAndDrop({ ...event, date })
  // };
  const onDropHandler = (e: any, index: number) => {
    e.preventDefault();
    setDroppedHour(index);
  };
  const onDragOverHandler = (e: any) => {
    e.preventDefault();
  };
  const selectClient = (client: User) => {
    dispatch(setSelectClient(client));
    dispatch(setIsInputLength(false));
  }

  const handleChange = (newTime: any) => {
    const selectedTime = time.clone().set({
      hour: newTime.format('HH'),
      minute: newTime.format('mm'),
    });
    const timestamp = moment.unix(+selectedEvent.start).hour(selectedTime.hour()).minute(selectedTime.minute()).format('X');
    setTime(selectedTime);
    changeEventHandler(timestamp, 'start');
  }

  return (
    <DayShowWrapper>
      <EventsListWrapper>
        <ScaleWrapper ref={ref}>
          {
            isDayContainCurrentTimestamp(moment().format('X'), today) ? (
              <RedLine position={getRedLinePosition()}/>
            ) : null
          }
          {cells.map((eventsList, index) => (
            <ScaleCellWrapper
              onDrop={(e) => onDropHandler(e, index)}
              onDragOver={onDragOverHandler}
            >
              <ScaleCellTimeWrapper>
                {index ? (
                  <>{`${index}`.padStart(2, '0')}:00</>
                ) : null}
              </ScaleCellTimeWrapper>
              <ScaleCellEventWrapper/>
            </ScaleCellWrapper>
          ))}
          {eventMap.map((event: CalendarEvents) => {
            const heightPerMinute = heightDiv / 60; // висота однієї хвилини в пікселях
            // @ts-ignore
            const blockHeight = heightPerMinute * event.duration?.toFixed(0) - 3; // висота блоку в відсотках
                                                                                  // відповідно до тривалості
            return (
              <EventItemButton
                draggable
                // onDragEnd={() => onDragEndHandler(event)}
                onClick={() => openFormHandler('Update', event)}
                // @ts-ignore
                left={40 + ( widthDiv ) * event.rank}
                top={getTopPosition(event) + 1}
                w={widthDiv - 2}
                h={blockHeight}
              >
                {event.name}
              </EventItemButton>
            )
          })}
        </ScaleWrapper>
      </EventsListWrapper>
    </DayShowWrapper>
  );
};

export default DayShow;

const DayShowWrapper = styled('div')`
  display: flex;
  flex-grow: 1;
  border-top: 1px solid #464648;

  @media (max-width: 500px) {
    flex-direction: column-reverse;
  }
`;

const EventsListWrapper = styled('div')`
  min-height: 600px;
  background-color: #000;
  color: #DDDDDD;
  flex-grow: 1;
`;

const EventFormWrapper = styled('div')`
  background-color: #27282A;
  color: #DDDDDD;
  width: 350px;
  position: relative;
  border-left: 1px solid #464648;
  padding: 10px;
  box-sizing: border-box;

  @media (max-width: 500px) {
    width: 100%;
  }
`;

const NoEventMsg = styled('div')`
  color: #565759;
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (max-width: 500px) {
    position: initial;
    transform: inherit;
    text-align: center;
    margin-top: 5px;
  }
`;

const ScaleWrapper = styled('div')`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 4px;
  position: relative;
`;

const ScaleCellWrapper = styled('div')`
  flex-grow: 1;
  position: relative;

  &:not(:last-child) {
    border-bottom: 1px solid #464648;
  }

  margin-left: 40px;
`;

const ScaleCellTimeWrapper = styled('div')`
  position: absolute;
  left: -35px;
  top: -13px;
  font-size: 12px;
`;

const ScaleCellEventWrapper = styled('div')`
  min-height: 35px;
`;

const EventItemButton = styled(EventItemWrapper)<EventItemButtonStyled>`
  width: unset;
  min-width: ${props => props.w}px;
  height: ${props => props.h}px;
  margin-left: 4px;
  position: absolute;
  left: ${props => props.left}px;
  top: ${props => props.top}px;
  display: flex;
  padding: 1px;
  background-color: rgba(71, 132, 255, 0.5);
  border: 1px solid rgba(71, 132, 255, 0.75);
`;

const RedLine = styled.div<RedLineStyled>`
  background-color: #FFA800;
  height: 1px;
  position: absolute;
  left: 0;
  right: 0;
  z-index: 1;
  top: ${props => props.position}%;
`;
