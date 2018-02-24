import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Education from '../components/education/Education';


export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route exact path="/education" render={() => <Education/>}/>;
    <Redirect to="/"/>
  </Switch>  
);