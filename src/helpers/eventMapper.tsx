import moment from "moment";
import { CalendarEvents } from '../components/calendar/Calendar.types';

export const eventMapper = (eventsBunch: CalendarEvents[]) => {
  const HOURS = 24;
  const rowHours = new Map([...Array(HOURS)].map((_,i) => ([i,new Map()])));
  // console.log(rowHours); +
  eventsBunch
    .sort((a,b) => b.duration - a.duration)
    .forEach(e => {
      const date = +moment.unix(+e.start).format('H');
      const rowHourItem = rowHours.get(date);
      rowHourItem?.set(e.eventId, e);
    });

  let i = 0;
  let rowNumber = 0;
  let columnNumber = 0;
  const columnsEventsGroups = new Map();
  columnsEventsGroups.set(columnNumber, new Map());
  let emptyRowsCount = 0;
  while (true) {

    if (rowHours.size === emptyRowsCount) {
      columnsEventsGroups.delete(columnNumber);
      break;
    }

    if(rowNumber > rowHours.size - 1) {
      rowNumber = 0;
      columnNumber++;
      columnsEventsGroups.set(columnNumber, new Map());
      emptyRowsCount = 0;
    }

    const rowAsHourData = rowHours.get(rowNumber);

    if(rowAsHourData?.size === 0) {
      rowNumber++;
      emptyRowsCount++;
      continue;
    }

    const iterator = rowAsHourData?.keys();
    // console.log(iterator); хз
    const key = iterator?.next().value;
    const firstEventInRowAsHourData = rowAsHourData?.get(key);

    rowAsHourData?.delete(key);
    (columnsEventsGroups.get(columnNumber)).set(key, firstEventInRowAsHourData);
    rowNumber = rowNumber + firstEventInRowAsHourData?.duration || 0;
  }
  return columnsEventsGroups;
}

