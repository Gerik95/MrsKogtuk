import React from 'react';
import styled from "styled-components";

const DivWrapper = styled("div")`
  background-color: #2a2820;
  height: 40px;

  @media (max-width: 500px) {
    height: 80px;
  }
`

const CalendarHeader = () => {
  return (
    <DivWrapper>

    </DivWrapper>
  );
};

export default CalendarHeader;