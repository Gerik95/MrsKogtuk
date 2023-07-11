import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { Colors } from '../constants';
import TableRow from '@mui/material/TableRow';

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: Colors.secondBg,
    color: theme.palette.common.white,
    width: '25%'
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const StyledTableRow = styled(TableRow)(({ theme }) => ( {
  cursor: 'pointer',
  '&:hover': {
    backgroundColor:  theme.palette.action.hover,
    transition: 'all 350ms',
  },
  // '&:nth-of-type(odd)': {
  //   backgroundColor: theme.palette.action.hover,
  // },
  // '&:nth-of-type(odd):hover': {
  //   backgroundColor: 'white',
  // },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
} ));