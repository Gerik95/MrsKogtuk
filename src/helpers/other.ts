import moment, { Moment } from 'moment/moment';
import { User } from '../store/slices/slice.type';
import { setIsShowModalWindow } from '../store/slices/uiSlice';
import { convertInTimeStamp } from './events';

export const getInitials = (str: string) => {
  return str
    .split(' ')
    .map(word => word.charAt(0))
    .join('');
}

export const formatPhoneNumber = (phoneNumber: string) => {
  return `+38 (${phoneNumber?.substring(0, 3)}) ${phoneNumber?.substring(3, 6)} ${phoneNumber?.substring(6, 8)} ${phoneNumber?.substring(8)}`;
}

export const sortByAlphabet = (users: User[]) => {
  return users.sort((a, b) => {
    const lastNameA = a.lastName.toUpperCase();
    const lastNameB = b.lastName.toUpperCase();

    if (lastNameA < lastNameB) {
      return -1;
    }
    if (lastNameA > lastNameB) {
      return 1;
    }
    return 0;
  });
}

export const showWindow = (dispatch: any) => {
  dispatch(setIsShowModalWindow(true));
}

export const closeWindow = (dispatch: any) => {
  dispatch(setIsShowModalWindow(false));
}

export const isCurrentDay = (day: Moment) => moment().isSame(day, 'day');
export const isSelectedMonth = (day: Moment, today: Moment) => today.isSame(day, 'month');

export const isDayContainCurrentTimestamp = (a: any, b: any) => a >= b.startOf('day').format('X')
  && a <= b.clone().endOf('day').format('X');
export const isDayContainCurrentEvent = (event: any, dayItem: any) => {
  convertInTimeStamp(event.scheduledDateTimeStart);
  // return isDayContainCurrentTimestamp(event.date, dayItem)
  return isDayContainCurrentTimestamp(convertInTimeStamp(event.scheduledDateTimeStart), dayItem)
};