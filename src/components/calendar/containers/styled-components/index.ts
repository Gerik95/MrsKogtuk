import styled from 'styled-components';

export interface ShadowWrapperStyled {
  isSmallScreen: boolean;
}

interface RowInCellStyled {
  justifyContent: string;
  pr?: number;
}

interface CellWrapperStyled {
  isWeekend?: boolean;
  isHeader?: boolean;
  isSelectedMonth?: boolean;
  isSmallScreen: boolean;
}

interface ButtonWrapperProps {
  danger?: boolean;
}

export const CellWrapper = styled.div<CellWrapperStyled>`
  min-height: ${props => props.isSmallScreen ? props.isHeader ? 24 : 50 : props.isHeader ? 24 : 94}px;
  //min-width: 120px;
  min-width: ${props => props.isSmallScreen ? 50 : 120}px;
  background-color: ${props => props.isWeekend ? '#27282A' : '#000000'};
  color: ${props => props.isSelectedMonth ? '#DDDDDD' : '#555759'};
`;

export const RowInCell = styled.div<RowInCellStyled>`
  display: flex;
  text-transform: uppercase;
  //flex-direction: column;
  justify-content: ${props => props.justifyContent ? props.justifyContent : 'flex-start'};
  
`;

export const EventItemWrapper = styled('button')`
	position: relative;
	flex-grow: 1;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	width: 114px;
	border: unset;
	color: #DDDDDD;
	cursor: pointer;
	margin: 0;
	padding: 0;
	text-align: left;
	background-color: #5d5f63;
	border: 1px solid #5d5f63;
	border-radius: 2px;
`;

export const EventInput = styled('input')`
  padding: 8px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #dddddd;
  outline: unset;
  border-bottom: 1px solid #464648;
`

export const EventTitle = styled('input')`
  padding: 8px 14px;
  font-size: .85rem;
  width: 100%;
  border: unset;
  background-color: #1E1F21;
  color: #DDDDDD;
  outline: unset;
  border-bottom: 1px solid #464648;
`;

export const ButtonsWrapper = styled('div')`
  padding: 8px 14px;
  display: flex;
  justify-content: flex-end;
`;

export const ButtonWrap = styled.button<ButtonWrapperProps>`
  color: ${props => props.danger ? '#f00' : '#27282A'};
  border: 1px solid ${props => props.danger ? '#f00' : '#27282A'};
  border-radius: 2px;
  cursor: pointer;
  &:not(:last-child){
    margin-right: 2px;
  }
`;
