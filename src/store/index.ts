import { configureStore } from '@reduxjs/toolkit';
import AuthSlice from './slices/authSlice';
import SideNavSlice from './slices/sideNavSlice';
import UiSlice from './slices/uiSlice';
import ClientsSlice from './slices/clientsSlice';

const stringMiddleware = () => (next: any) => (action: any) => {
  if(typeof action === 'string') {
    return next({
      type: action
    })
  }
  return next(action)
};

export const store = configureStore({
  reducer: {
    auth: AuthSlice,
    sideBar: SideNavSlice,
    ui: UiSlice,
    clientsData: ClientsSlice
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false,
  })
    .concat(stringMiddleware),
  devTools: true
})