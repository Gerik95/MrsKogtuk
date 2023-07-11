import { createSlice } from '@reduxjs/toolkit';
import { ClientsSliceState } from './slice.type';
import { ClientInitialValue } from '../../types';

const initialState: ClientsSliceState = {
  clients: [],
  client: ClientInitialValue,
  selectClient: ClientInitialValue,
};

const clientsSlice = createSlice({
  name: 'clients',
  initialState,
  reducers: {
    setClients(state, action) {
      state.clients = action.payload;
    },
    setClient(state, action){
      state.client = action.payload;
    },
    setSelectClient(state, action){
      console.log(action);
      state.selectClient = action.payload;
    }
  }
})

export const { setClients, setClient, setSelectClient } = clientsSlice.actions;
export default clientsSlice.reducer;