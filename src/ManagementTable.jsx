import React, { useState, useEffect } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TablePagination,
} from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const ManagementTable = () => {
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState({ total: 0 });

  useEffect(() => {
    const getData = async () => {
      const dataFromServer = await fetchData();
      setContent(dataFromServer);
    };
    const getPagination = async () => {
      const dataFromServer = await fetchPagination();
      setPagination(dataFromServer);
    };
    getData();
    getPagination();
  }, []);

  const fetchData = async () => {
    const res = await fetch('http://localhost:5000/data');
    const data = await res.json();
    return data;
  };

  const fetchPagination = async () => {
    const res = await fetch('http://localhost:5000/paging');
    const data = await res.json();
    return data;
  };

  const getFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`;
  };

  return (
    <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Name</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">2FA</TableCell>
            <TableCell align="center">User class</TableCell>
            <TableCell align="center">Registered</TableCell>
            <TableCell align="center">Account status</TableCell>
            <TableCell align="center">Change account status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {content.map((item) => (
            <TableRow key={item.managerId}>
              <TableCell align="center">{getFullName(item.firstName, item.lastName)}</TableCell>
              <TableCell align="center">{item.email}</TableCell>
              <TableCell align="center">{item.using2FA ? 'yes' : 'no'}</TableCell>
              <TableCell align="center">{item.admin ? 'admin' : 'user'}</TableCell>
              <TableCell align="center">{item.createdTime}</TableCell>
              <TableCell align="center">{item.activated ? 'active' : 'deactivated'}</TableCell>
              <TableCell align="center">
                {item.enabled ? <CheckCircleIcon color="primary" /> : <CancelIcon color="error" />}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <TablePagination
        component="div"
        page={0}
        count={pagination.total}
        rowsPerPage={20}
        rowsPerPageOptions={[10, 20]}
        onChangePage={() => {}}
      />
    </TableContainer>
  );
};

export default ManagementTable;
