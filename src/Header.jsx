import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" color="primary">
      <Toolbar className={classes.menu}>
        <Link className={classes.menu} to="/support-page">
          Support page
        </Link>
        <Link className={classes.menu} to="/management-table">
          Management table
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
