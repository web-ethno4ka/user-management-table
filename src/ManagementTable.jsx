import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import useStyles from './styles';

// const styles = (theme) => ({
//   root: {
//     backgroundColor: 'red',
//   },
// });

const ManagementTable = () => {
  const classes = useStyles();
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setContent(dataFromServer);
    };
    getData();
  }, []);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/data');
    const data = await res.json();
    console.log(data);
    return data;
  };

  // componentDidMount() {
  //   const getData = async () => {
  //     const dataFromServer = await fetchData();
  //     SVGMetadataElement(dataFromServer);
  //   };
  //   getData();
  // }

  // render() {
  //   const { classes } = this.props;

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">2FA</TableCell>
            <TableCell align="left">User class</TableCell>
            <TableCell align="left">Registered</TableCell>
            <TableCell align="left">2FA</TableCell>
            <TableCell align="left">Account status</TableCell>
            <TableCell align="left">Change account status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.firstName} {item.lastName}
              </TableCell>
              <TableCell align="right">{item.email}</TableCell>
              <TableCell align="right">{item.using2FA}</TableCell>
              <TableCell align="right">{item.admin}</TableCell>
              <TableCell align="right">{item.createdTime}</TableCell>
              <TableCell align="right">{item.activated}</TableCell>
              <TableCell align="right">{item.enabled}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

// export default withStyles(styles)(ManagementTable);
export default ManagementTable;
