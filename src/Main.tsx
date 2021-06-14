import { Route, Switch } from 'react-router-dom';
import SupportPage from './supportPage';
import ManagementTable from './ManagementTable';

const Main = () => {
  return (
    <Switch>
      <Route exact path="/support-page" component={SupportPage} />
      <Route exact path="/management-table" component={ManagementTable} />
    </Switch>
  );
};

export default Main;
