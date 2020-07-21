import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import './MethodsList.css';

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

const useStyles = makeStyles({
  table: {
    minWidth: 400,
  },
});

const MethodsList = (props) => {
  const classes = useStyles();
  const { methodsList } = props;
  const { rule } = props;
  console.log(methodsList);

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
          {Object.keys(methodsList).map((key) => (
            <StyledTableRow
              className="tableRow"
              onClick={() =>
                rule === 'admin' ? props.moveToEditMethodPage(key) : null
              }
              key={key}
            >
              <StyledTableCell component="th" scope="row">
                {key}
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
};

export default MethodsList;
