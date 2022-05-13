import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Projects from './project/pages/Projects';
import NewProject from './project/pages/NewProject';
import UpdateProject from './project/pages/UpdateProject';
import UserProjects from './project/pages/UserProjects';
import MainNavigation from './shared/Navigation/MainNavigation';


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Switch>
        <Route path='/' exact>
          <Projects />
        </Route>

        <Route path='/projects/new' exact>
          <NewProject />
        </Route>

        <Route path='/projects/:projectId'>
          <UpdateProject />
        </Route>

        <Route path='/:userId/projects' exact>
          <UserProjects />
        </Route>

      </Switch>
    </Router>
  )
};

export default App;