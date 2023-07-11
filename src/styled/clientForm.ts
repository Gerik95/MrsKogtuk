import styled from 'styled-components';
import { Colors } from '../constants';
import { ButtonResetStyled } from './button';

export const FormClientContainer = styled('div')`
  width: calc(100% - 20px);
  max-width: 900px;
  border-radius: 10px;
  padding: 25px;
  background-color: ${Colors.secondBg};
  box-sizing: border-box;
`

export const HeaderFormClient = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`

export const TitleFormClient = styled('div')`
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #FFFFFF;
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media (max-width: 500px) {
    font-size: 16px;
    column-gap: 10px;

    svg {
      width: 20px;
    }
  }
`

export const ButtonCloseFormClient = styled(ButtonResetStyled)`
  width: 30px;
  height: 30px;
  cursor: pointer;

  svg {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 500px) {
    width: 20px;
    height: 20px;
  }
`