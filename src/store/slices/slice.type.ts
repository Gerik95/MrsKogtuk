export interface User {
  createDate: any;
  createdBy: number;
  email: string;
  firstName: string;
  lastName: string;
  modifiedBy: number;
  modifiedDate: any;
  phoneNumber: string;
  userId: number;
}

export interface AuthSliceState {
  step: 'first' | 'second',
  isLoginPage: boolean;
  isLogin: boolean;
  authErrorMessage: string;
  admin: User | null;
}

export interface UiSliceState {
  isLoading: boolean;
  isShowModalWindow: boolean;
  isInputLength: boolean;
  isEventForm: boolean;
}

export interface SideNavState {
  isShowSideNav: boolean;
  isShowMobileSideNav: boolean;
}

export interface ClientsSliceState {
  clients: User[];
  client: User;
  selectClient: User;
}
export interface AuthSliceProps {
  auth: AuthSliceState;
  sideBar: SideNavState;
  ui: UiSliceState;
  clientsData: ClientsSliceState;
}