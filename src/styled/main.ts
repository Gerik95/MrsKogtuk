import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { Colors, Shadows } from '../constants';
import { InitialsProps, InputStyled } from './styled.type';

export interface StepItemProps {
  step?: boolean;
}

export const AuthContainer = styled('div')`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`

export const AuthContentBlock = styled('div')`
  width: 100%;
  max-width: 400px;

  @media (max-width: 500px) {
    padding: 45px;
    box-sizing: border-box;
  }
`

export const AuthButton = styled('button')`
  background-color: ${Colors.authButtonBg};
  color: ${Colors.authButtonColor};
  height: 50px;
  width: 100%;
  border-radius: 10px;
  cursor: pointer;
  margin-top: 40px;
  transition: all 350ms;
  font-size: 20px;

  &:hover {
    box-shadow: ${Shadows.activeBlackShadow};
  }
`

export const FlexBlock = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Form = styled('div')`
  margin-top: 46px;
`

export const InputItem = styled('div')`
  margin-top: 20px;
`

export const Input = styled.input<InputStyled>`
  background-color: ${props => !props.isDark ? Colors.inputFormBg : 'transparent'};
  width: 100%;
  padding: 16px;
  border: 1px solid #B3B3B3;
  border-radius: 10px;
  box-sizing: border-box;
  color: ${props => !props.isDark ? Colors.mainColor : Colors.secondColor}
`

export const InputPhone = styled(InputMask)<InputStyled>`
  background-color: ${props => !props.isDark ? Colors.inputFormBg : 'transparent'};
  width: 100%;
  padding: 16px;
  border: 1px solid #B3B3B3;
  border-radius: 10px;
  box-sizing: border-box;
  color: ${props => !props.isDark ? Colors.mainColor : Colors.secondColor}
`

export const FormContent = styled('div')`

`
export const TextError = styled('p')`
  font-size: 12px;
  color: red;
  padding-left: 10px;
  margin-top: 5px;
`

export const StepsContainer = styled('div')`
  display: flex;
  justify-content: space-between;
  width: 61px;
  margin: 8px auto;
`

export const StepItem = styled.div<StepItemProps>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #36353B;
  position: relative;
  box-sizing: border-box;
  font-size: 12px;
  background-color: ${props => props.step ? Colors.secondBg : Colors.mainBg};
  color: ${props => props.step ? Colors.secondColor : Colors.mainColor};
  box-shadow: ${props => props.step ? Shadows.activeBlackShadow : 'none'};
`

export const StepItemFirst = styled(StepItem)<StepItemProps>`

  &::after {
    content: '';
    display: block;
    position: absolute;
    width: 16px;
    height: 1px;
    background-color: ${Colors.mainColor};
    right: -19.5px;
  }
`

export const HaveAccount = styled('p')`
  font-weight: 400;
  font-size: 13px;
  line-height: 16px;
  color: ${Colors.mainColor};
  margin-top: 20px;
  text-align: center;

  a {
    color: ${Colors.linkColor};
    font-weight: 700;
    font-size: 13px;
    text-shadow: ${Shadows.activeBlackShadow};
    cursor: pointer;
    text-decoration: none;
  }
`

export const Initials = styled.div<InitialsProps>`
  width: ${props => props.sizeBox};
  height: ${props => props.sizeBox};
  border-radius: 50%;
  background-color: ${props => props.background};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  font-size: ${props => props.fontSize};
  color: ${props => props.color};
  letter-spacing: 1.5px;
`
export const Container = styled('div')`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 1fr;
  height: 100vh;
`

export interface InputSearchContentStyled {
  width: string;
}