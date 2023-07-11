import styled from 'styled-components';
import { Colors } from '../constants';

export const TitleMobile = styled('div')`
  text-align: center;
  font-weight: 700;
  line-height: 20px;
  color: ${Colors.mainColor};
  margin-bottom: 25px;
`

export const LayoutContainerHeader = styled('div')`

`

export const SideNavMobileButton = styled('button')`
  background-color: transparent;
  border: none;
`;

export const LogoWrap = styled('div')`
  //position: absolute;
  //transform: translate(-50%, -50%);
  //left: 50%;
  //top: 50%;

  svg path {
    fill: ${Colors.mainColor};
  }
`