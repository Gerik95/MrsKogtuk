import styled from 'styled-components';
import { Button } from './styled.type';

export const ButtonResetStyled = styled('button')`
  background-color: transparent;
  border: none;
`

export const ButtonStyled = styled.button<Button>`
  height: 50px;
  width: 100%;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: ${props => props.bgColor};
  color: ${props => props.color}
`

export const CreateClientButton = styled(ButtonStyled)`
  display: flex;
  column-gap: 20px;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  line-height: 23px;
  color: #FFFFFF;
`

export const ButtonClose = styled(ButtonResetStyled)`
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
`