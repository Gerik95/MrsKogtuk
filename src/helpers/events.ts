import moment from 'moment';

export function convertDate (date: number){
  return  moment.unix(date).toISOString();
}

export const convertInTimeStamp = (dateTimeString: string) => {
  const dateTime = moment(dateTimeString, "YYYY-MM-DDTHH:mm:ss");
  const timeStamp = dateTime.unix();
  return timeStamp;
}