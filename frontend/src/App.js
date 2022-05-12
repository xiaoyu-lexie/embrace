import React from 'react';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Projects from './project/pages/Projects';
import NewProject from './project/pages/NewProject';
import UpdateProject from './project/pages/UpdateProject';


const App = () => {
  return (
    <Router>
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

      </Switch>
    </Router>
  )
};

export default App;