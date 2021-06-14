import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  supportPage: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    height: '90vh',
    color: 'black',
  },
  message: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50vw',
    height: '40vh',
    textAlign: 'center',
  },
  menu: {
    fontSize: '1.2rem',
    color: '#fff',
    '&:hover': {
      color: '#f00',
    },
    textDecoration: 'none',
    marginRight: '3rem',
  },
});

export default useStyles;
