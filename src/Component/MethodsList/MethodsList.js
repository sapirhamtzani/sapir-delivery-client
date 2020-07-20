import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function createData(methodId, methodName, deliveryRate) {
  return { methodId, methodName, deliveryRate };
}

const rows = () => [
  createData('1', '90210', '6$'),
  createData('2', 'Tel-Aviv', '10$'),
];

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

export default function MethodsList() {
  const classes = useStyles();
  const { methodsList } = props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Method id</StyledTableCell>
            <StyledTableCell align="right">Method Name</StyledTableCell>
            <StyledTableCell align="right">Delivery Rate</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Object.keys(methodsList).map((kay) => (
            <StyledTableRow key={kay}>
              <StyledTableCell component="th" scope="row">
                {kay}
              </StyledTableCell>
              <StyledTableCell align="right">
                {methodsList[key].name}
              </StyledTableCell>
              <StyledTableCell align="right">
                {methodsList[key].rate}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
