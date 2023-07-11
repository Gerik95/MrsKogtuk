import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../constants';
import { CloseIcon, DeleteIcon } from '../../assets/icons';
import { ButtonClose, ButtonStyled } from '../../styled';
import { closeWindow } from '../../helpers/other';
import { useDispatch } from 'react-redux';

interface DeleteWindowProps {
  title: string;
  onDeleteHandler: () => void;
}

const DeleteWindow: React.FC<DeleteWindowProps> = ({ title, onDeleteHandler }) => {
  const dispatch = useDispatch();
  return (
    <Delete>
      <ButtonClose onClick={() => closeWindow(dispatch)}>
        <CloseIcon/>
      </ButtonClose>
      <Wrapper>
        <Title>{title}</Title>
        <WrapIcon>
          <DeleteIcon width="100"/>
        </WrapIcon>
        <Buttons>
          <ButtonWrap>
            <Button
              color="#fff"
              bgColor={Colors.dangerColor}
              onClick={onDeleteHandler}
            >
              <DeleteIcon/>
              Видалити
            </Button>
          </ButtonWrap>

          <ButtonWrap>
            <Button
              color="#fff"
              bgColor="rgba(217, 217, 217, 0.1)"
              onClick={onDeleteHandler}
            >
              Скасувати
            </Button>
          </ButtonWrap>
        </Buttons>
      </Wrapper>
    </Delete>
  );
};

export default DeleteWindow;

const Delete = styled('div')`
  position: relative;
  width: calc(100% - 20px);
  max-width: 450px;
  background-color: ${Colors.secondBg};
  padding: 20px;
  box-sizing: border-box;
  border-radius: 10px;
`

const Wrapper = styled('div')`
  padding: 50px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled('div')`
  font-weight: 700;
  font-size: 32px;
  color: #FFFFFF;
`

const WrapIcon = styled('div')`
  margin-top: 75px;
  margin-bottom: 75px;
`;

const Buttons = styled('div')`
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

const ButtonWrap = styled('div')`
  position: relative;
  width: 220px;
`

const Button = styled(ButtonStyled)`
  svg {
    position: absolute;
    left: 15px;
    top: 50%;
    transform: translateY(-50%);
  }
`


