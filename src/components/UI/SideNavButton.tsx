import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CloseIcon, PrevIcon } from '../../assets/icons';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';

import { setIsShowMobileSideNav, setIsShowSideNav } from '../../store/slices/sideNavSlice';
import { AuthSliceProps } from '../../store/slices/slice.type';
import { Colors, Shadows } from '../../constants';
import { isShowSideNavStyle } from '../../styled/styled.type';

const SideNavButtonUI = () => {
  const dispatch = useDispatch();
  const { isShowSideNav } = useSelector((state: AuthSliceProps) => state.sideBar);
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });
  const onSideNavHandler = () => {
    if(isShowSideNav) {
      localStorage.removeItem('isShowSideNav');
      dispatch(setIsShowSideNav(false));
    } else {
      localStorage.setItem('isShowSideNav', 'true');
      dispatch(setIsShowSideNav(true));
    }
  }

  const onCloseHandler = () => dispatch(setIsShowMobileSideNav());

  return (
    <>
      {!isSmallScreen ? (
        <SideNavButton onClick={onSideNavHandler}>
          <IconWrap isShowSideNav={isShowSideNav}>
            <PrevIcon/>
          </IconWrap>
        </SideNavButton>
      ) : null}

      {isSmallScreen && (
        <CloseButton onClick={onCloseHandler}>
          <CloseIcon/>
        </CloseButton>
      )}
    </>
  );
};

export default SideNavButtonUI;

const Button = styled('button')`
  position: absolute;
  top: 30px;
  right: 0;
  transform: translateX(calc(100% + 5px));
  border: none;
`

const SideNavButton = styled(Button)`
  width: 25px;
  height: 25px;
  border-radius: 6px;
  background-color: ${Colors.sidenavBg};
  cursor: pointer;
  z-index: 1;

  &:hover {
    box-shadow: ${Shadows.activeBlackShadow};
  }

  @media (max-width: 500px) {
  }
`

const IconWrap = styled.div<isShowSideNavStyle>`
  transform: ${props => props.isShowSideNav ? 'rotate(0deg)' : 'rotate(180deg)'};
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const CloseButton = styled('button')`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 30px;
  right: 15px;
`