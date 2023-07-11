import React, { ReactNode, FC } from 'react';
import styled from 'styled-components';

interface ModalWindowProps {
  children: ReactNode;
}

const ModalWindow: FC<ModalWindowProps> = ({ children }) => {
  return (
    <ModalWindowContainer>
      {children}
    </ModalWindowContainer>
  );
};

export default ModalWindow;

const ModalWindowContainer = styled('div')`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(179, 179, 179, .85);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1111;
`
