import React, { useState } from 'react';
import { Grid, Box, TextField, Typography } from '@material-ui/core';
import useStyles from './styles';

const SupportPage = () => {
  const classes = useStyles();
  const [title, setTitle] = useState('Something not working?');
  const [description, setDescription] = useState(
    'Write an email in English to our helpdesk with the return or order number that is not behaving as it should and someone will get back to you as soon as possible',
  );
  const [email, setEmail] = useState('helpdesk@returnado.com');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Grid container className={classes.supportPage}>
      <Box className={classes.message}>
        <Typography variant="h4">{title}</Typography>
        <Typography component="p">{description}</Typography>
        <Typography>
          Email: <a href="#">{email}</a>
        </Typography>
        <TextField
          name="email"
          type="email"
          label="Email"
          variant="outlined"
          value={email}
          onChange={handleEmailChange}
        />
      </Box>
    </Grid>
  );
};

export default SupportPage;
