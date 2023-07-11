import React from 'react';
import { Moment } from 'moment';
import styled from 'styled-components';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { DISPLAY_MODE_DAY, DISPLAY_MODE_MONTH } from './constants';

interface CalendarMonitorProps {
  displayMode: 'month' | 'day';
  today: Moment;
  prevHandler: () => void;
  todayHandler: () => void;
  nextHandler: () => void;
  setDisplayMode: (value: 'month' | 'day') => void;
}

interface ButtonWrapperProps {
  unPressed?: boolean;
}

const CalendarMonitor: React.FC<CalendarMonitorProps> = (
  {
    today,
    prevHandler,
    todayHandler,
    nextHandler,
    setDisplayMode,
    displayMode
  }
) => {
  return (
    <DivWrapper>
      <DateWrap>
        {displayMode === DISPLAY_MODE_DAY ? (
          <TextWrapper>
            <TitleWrapper>{today.format('DD')}</TitleWrapper>
          </TextWrapper>
        ) : null}
        <TextWrapper><TitleWrapper>{today.format('MMMM')}</TitleWrapper></TextWrapper>
        <TextWrapper>{today.format('YYYY')}</TextWrapper>
      </DateWrap>
      <ButtonsCenterWrapper>
        <TodayButton unPressed={displayMode === DISPLAY_MODE_MONTH}
                     onClick={() => setDisplayMode(DISPLAY_MODE_MONTH)}>Місяць</TodayButton>
        <TodayButton unPressed={displayMode === DISPLAY_MODE_DAY}
                     onClick={() => setDisplayMode('day')}>День</TodayButton>
      </ButtonsCenterWrapper>
      <ButtonsWrapper>
        <ButtonWrapper onClick={() => prevHandler()}>
          <ChevronLeftIcon/>
        </ButtonWrapper>
        <TodayCustomButton onClick={() => todayHandler()}>Сьогодні</TodayCustomButton>
        <ButtonWrapper onClick={() => nextHandler()}>
          <ChevronRightIcon/>
        </ButtonWrapper>
      </ButtonsWrapper>
    </DivWrapper>
  );
};

export default CalendarMonitor;

const DivWrapper = styled('div')`
  display: flex;
  justify-content: space-between;
  background-color: #000;
  color: #DCDDDD;
  padding: 16px;
  position: relative;

  @media (max-width: 500px) {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
`;

const DateWrap = styled('div')`
  @media (max-width: 500px) {
    grid-area: 1 / 1 / 2 / 13;
    display: flex;
    justify-content: center;
  }
`

const TextWrapper = styled('span')`
  font-size: 32px;
`;

const TitleWrapper = styled(TextWrapper)`
  text-transform: capitalize;
  font-weight: bold;
  margin-right: 8px;
  margin-left: 8px;
`;

const ButtonsWrapper = styled('div')`
  display: flex;
  align-items: center;
  //color: red;
  
  @media (max-width: 500px) {
    grid-area: 2 / 9 / 3 / 13;
  }
`;

const ButtonsCenterWrapper = styled(ButtonsWrapper)`
  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);

  @media (max-width: 500px) {
    position: initial;
    transform: inherit;
    grid-area: 2 / 1 / 3 / 6;
  }
`;

const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: block;
  position: relative;
  border: unset;
  background-color: transparent;
  height: 20px;
  color: ${props => props.unPressed ? '#FFFFFF' : '#FFFFFF'};
  outline: unset;
  cursor: pointer;
  padding: 5px;
  font-size: 15px;
  
  svg{
    fill: #FFA800;
  }

  &:not(:last-child) {
    margin-right: 5px;
  }
  
  &::before {
    content: '';
    display: ${props => props.unPressed ? 'block' : 'none'};
    width: 100%;
    height: 1px;
    background-color: #FFA800;
    bottom: -8px;
    left: 0;
    position: absolute;
  }
`;

const TodayButton = styled(ButtonWrapper)`
  font-weight: 400;
  font-family: var(--font-merriweather);
`;

const TodayCustomButton = styled(TodayButton)`
  margin-top: 3px;
`;
