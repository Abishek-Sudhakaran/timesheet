import React, { Component } from 'react';
import {routes} from './routes';
import Sidebar from './Sidebar';
import { BrowserRouter as Router,Route,Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <Router>
        <>
         <Sidebar/>
         <Switch>
           {routes.map(route =><Route key={route.path} path = {route.path} component={route.component }/>)}
          </Switch>
        </>
         </Router>
    );
  }
}

export default App;
