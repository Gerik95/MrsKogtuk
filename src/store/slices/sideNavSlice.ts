import { createSlice } from '@reduxjs/toolkit';
import { SideNavState } from './slice.type';

const initialState: SideNavState = {
  isShowSideNav: !!localStorage.getItem('isShowSideNav') || false,
  isShowMobileSideNav: false
};

const sideNavSlice = createSlice({
  name: 'sideNav',
  initialState,
  reducers: {
    setIsShowSideNav(state, action) {
      state.isShowSideNav = action.payload;
    },
    setIsShowMobileSideNav(state) {
      state.isShowMobileSideNav = !state.isShowMobileSideNav ;
    },
  }
})

export const { setIsShowSideNav, setIsShowMobileSideNav } = sideNavSlice.actions;
export default sideNavSlice.reducer;