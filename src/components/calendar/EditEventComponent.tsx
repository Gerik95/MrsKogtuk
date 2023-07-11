import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import moment from 'moment/moment';
import dayjs from 'dayjs';
import { DateTimePicker } from '@mui/x-date-pickers';
import FormControl from '@mui/material/FormControl';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

import { EditEventProps } from './Calendar.types';
import { AuthSliceProps } from '../../store/slices/slice.type';
import { setIsLoading } from '../../store/slices/uiSlice';
// import { getClientDetails } from '../../api/client';
import { setClient } from '../../store/slices/clientsSlice';
import { EventTitle } from './containers/styled-components';
import { EditIcon } from '../../assets/icons';
import Loader from '../UI/Loader';
import { Colors } from '../../constants';
import { ButtonResetStyled, PositionRelative, SelectEventTimeWrapper } from '../../styled';
import DurationSelector from './DurationSelector';

const EditEventComponent: React.FC<EditEventProps> = ({ selectedEvent, changeEventHandler, setDurationForEvent }) => {
  const { client } = useSelector((state: AuthSliceProps) => state.clientsData);
  const { isLoading } = useSelector((state: AuthSliceProps) => state.ui);
  const dispatch = useDispatch();
  console.log(selectedEvent);
  const [isEdit, setIsEdit] = useState(false);

  // useEffect(() => {
  //   const getClient = async () => {
  //     dispatch(setIsLoading(true));
  //     const response = await getClientDetails(selectedEvent.clientId);
  //     dispatch(setClient(response.singleUser));
  //     dispatch(setIsLoading(false));
  //   }
  //   getClient();
  // }, [selectedEvent.eventId]);

  const handleChange = (event: any) => {
    const timestamp = dayjs(event).unix();
    changeEventHandler(timestamp, 'start');
  };

  const startEvent = moment(selectedEvent.scheduledDateTimeStart).format('HH:mm');
  const endEvent = moment(selectedEvent.scheduledDateTimeEnd).format('HH:mm');

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      {isEdit ? (
        <EventTitle
          value={selectedEvent?.name}
          name="name"
          onChange={e => changeEventHandler(e.target.value, 'name')}
          placeholder="Title"
        />
      ) : (
        <NameEvent>{selectedEvent?.name}
          <EditButton onClick={() => setIsEdit(true)}>
            <EditIcon width="25" height="25"/>
          </EditButton>
        </NameEvent>
      )}
      <SelectEventTimeWrapper>
        <PositionRelative>
          <FormControl fullWidth>
            <DateTimePicker
              sx={{backgroundColor: '#D9D9D9'}}
              value={dayjs(selectedEvent.scheduledDateTimeStart)}
              onChange={handleChange}
              ampm={false}
            />
          </FormControl>
        </PositionRelative>
      </SelectEventTimeWrapper>
      <SelectEventTimeWrapper>
        <PositionRelative>
          <DurationSelector setDurationForEvent={setDurationForEvent} selectedEvent={selectedEvent}/>
        </PositionRelative>
      </SelectEventTimeWrapper>
      {isLoading ? <Loader/> : (
        <ClientInfo>
          <ClientItem>
            <ClientItemName>Клієнт:</ClientItemName>
            <ClientItemInfo>{client.lastName} {client.firstName}</ClientItemInfo>
          </ClientItem>
          <ClientItem>
            <ClientItemName>Дата:</ClientItemName>
            <ClientItemInfo>{moment.unix(selectedEvent.start).locale('uk').format('ddd, D MMMM YYYY')}</ClientItemInfo>
          </ClientItem>
          <ClientItem>
            <ClientItemName>Час:</ClientItemName>
            <ClientItemInfo>{startEvent} - {endEvent}</ClientItemInfo>
          </ClientItem>
        </ClientInfo>
      )}
    </LocalizationProvider>
  );
}

export default EditEventComponent;

const EditButton = styled(ButtonResetStyled)`
  position: absolute;
  right: 0;
  cursor: pointer;
`

const NameEvent = styled('div')`
  font-weight: 700;
  font-size: 24px;
  color: #B3B3B3;
  margin-top: 20px;
  margin-bottom: 20px;
  position: relative;

  svg {
    transition: all 0.35s;
    
    path {
      fill: #B3B3B3;
    }
  }

  svg:hover {
    path {
      fill: #fff;
    }
  }
`;

const ClientInfo = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`

const ClientItem = styled('div')`
  display: flex;
  font-size: 16px;
  margin-top: 20px;
`

const ClientItemInfo = styled('div')`
  font-weight: 700;
  color: ${Colors.mainColor};
  background-color: #D9D9D9;
  padding: 3px 7px;
  border-radius: 60px;
`

const ClientItemName = styled('div')`
  font-weight: 400;
  color: #B3B3B3;
  flex-basis: 60px;
`