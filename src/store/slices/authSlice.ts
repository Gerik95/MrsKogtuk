import { createSlice } from '@reduxjs/toolkit';
import { AuthSliceState } from './slice.type';

const initialState: AuthSliceState = {
  admin: null,
  step: 'first',
  isLoginPage: false,
  isLogin: !!localStorage.getItem('accessToken') || false,
  authErrorMessage: ''
};

const authSlice = createSlice({
  name: 'authorisation',
  initialState,
  reducers: {
    setStep(state, action) {
      state.step = action.payload;
    },
    setIsLoginPage(state, action) {
      state.isLoginPage = action.payload;
    },
    setIsLogin(state, action) {
      state.isLogin = action.payload;
    },
    setAuthErrorMessage(state, action) {
      state.authErrorMessage = action.payload;
    },
    setGetAdmin(state, action) {
      state.admin = { ...action.payload }
    },
  }
})

export const { setStep, setIsLoginPage, setAuthErrorMessage, setIsLogin, setGetAdmin } = authSlice.actions
export default authSlice.reducer;