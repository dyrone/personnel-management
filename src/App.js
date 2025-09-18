import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PersonnelManagementPage from './pages/PersonnelManagementPage';
import ResumePage from './pages/ResumePage';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/personnel-management" component={PersonnelManagementPage} />
        <Route path="/resume/:id" component={ResumePage} />
        <Route path="/resume" component={ResumePage} />
        <Route path="/" component={PersonnelManagementPage} />
      </Switch>
    </Router>
  );
};

export default App;
