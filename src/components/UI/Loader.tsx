import React from 'react';
import styled from 'styled-components';
import { HashLoader } from 'react-spinners';

import { Colors } from '../../constants';

const Loader = () => {
  return (
    <LoaderContainer>
      <HashLoader color={Colors.mainColor} />
    </LoaderContainer>
  );
};

export default Loader;

const LoaderContainer = styled('div')`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  //background-color: rgba(0, 0, 0, .25);
  z-index: 9999;
`
