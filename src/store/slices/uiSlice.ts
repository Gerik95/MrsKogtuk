import { createSlice } from '@reduxjs/toolkit';
import { UiSliceState } from './slice.type';

const initialState: UiSliceState = {
  isLoading: false,
  isShowModalWindow: false,
  isInputLength: false,
  isEventForm: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setIsShowModalWindow(state, action) {
      state.isShowModalWindow = action.payload;
    },
    setIsInputLength(state, action) {
      state.isInputLength = action.payload;
    },
    setIsEventForm(state, action) {
      state.isEventForm = action.payload;
    }
  }
})

export const { setIsLoading, setIsShowModalWindow, setIsInputLength, setIsEventForm } = uiSlice.actions
export default uiSlice.reducer;