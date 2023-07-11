import React from 'react';
import moment from 'moment/moment';
import { CellWrapper, RowInCell } from './containers/styled-components';
import { useMediaQuery } from 'react-responsive';

const CalendarGridHeader = () => {
  const isSmallScreen = useMediaQuery({ query: '(max-width: 500px)' });
  return (
    <>
      {[...Array(7)].map((_, i) => (
        <CellWrapper key={i} isHeader isSelectedMonth isSmallScreen={isSmallScreen}>
          <RowInCell
            justifyContent="center"
            pr={1}
          >
            {moment().locale('uk').day(i + 1).format(!isSmallScreen ? "ddd" : "dd")}
          </RowInCell>
        </CellWrapper>
      ))}
    </>
  );
};

export default CalendarGridHeader;
