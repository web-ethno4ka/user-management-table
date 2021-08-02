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
import axios from 'axios';

const ManagementTable = () => {
  const [content, setContent] = useState([]);
  const [pagination, setPagination] = useState({ total: 0 });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('http://localhost:5000/data');
      setContent(result.data);
    };
    const fetchPagination = async () => {
      const result = await axios('http://localhost:5000/paging');
      setPagination(result.data);
    };
    fetchData();
    fetchPagination();
  }, []);

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
