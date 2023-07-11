import { Moment } from 'moment';

export interface CalendarGridProps {
  startDay: any;
  today: Moment;
  totalDays: number;
  eventsCalendar: any[];
  openFormHandler: (method: string, event?: any, day?: any) => void;
  setDisplayMode: (value: 'month' | 'day') => void;
  dayHandler: (value: any) => void;
}

export interface CalendarEvents {
  start: number;
  createDate: string;
  createdBy: number;
  duration: number;
  clientId: number;
  name: string;
  eventId: string;
  masterId: number;
  modifiedBy: number;
  modifiedDate: string;
  scheduledDateTimeStart: string;
  rank?: number;
}

export interface CalendarCellProps {
  dayItem: Moment;
  today: Moment;
  eventsCalendar: any[];
  openFormHandler: (method: string, event?: any, day?: any) => void;
  setDisplayMode: (value: 'month' | 'day') => void;
  dayHandler: (value: any) => void;
}

export interface DayShowProps {
  method: string | null;
  eventsCalendar: any[];
  today: Moment;
  selectedEvent: any;
  changeEventHandler: (event: any, value: string) => void;
  cancelButtonHandler: () => void;
  // removeEventHandler: () => void;
  // eventFetchHandler: () => void;
  // updateEventByDragAndDrop: (value: any) => void;
  openFormHandler: (method: string, event?: any, day?: any) => void;
  setEventsCalendar: (value: any) => void;
}

export interface EventItemButtonStyled {
  left: number;
  top: number;
  w: number;
  h: number;
}


export interface RedLineStyled{
  position: number;
}

export interface TimeSelectProps {
  selectedEvent: any;
  changeEventHandler: (event: any, value: string) => void;
}

export interface EditEventProps {
  selectedEvent: any;
  changeEventHandler: (event: any, value: string) => void;
  setDurationForEvent: (value: number) => void;
}

export interface DurationSelectorProps {
  setDurationForEvent: (value: number) => void;
  selectedEvent?: any;
}