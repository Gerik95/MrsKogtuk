import api from './index';
import { RequestUrl } from '../constants';

export const fetchClientHandler = async (fetchUrl: string, event: any, httpMethod: string) => {
  try {
    const response = await api(fetchUrl, {
      method: httpMethod,
      headers: {
        'Content-Type': 'application/json'
      },
      data: event
    });
    return response.data.singleEvent;
  } catch(error) {
    return error;
  }
}

export const getEventsClients = async (startDay: string, endDay: string) => {
  try {
    const response = await api(`${RequestUrl.event}?start=${startDay}&end=${endDay}`);
    // console.log(response);
    return response.data.events;
  } catch(error) {
    return error;
  }
}

export const deleteClient = async (eventId: string) => {
  try {
    await api.delete(`${RequestUrl.event}?eventId=${eventId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
  } catch(error) {
    return error;
  }
}