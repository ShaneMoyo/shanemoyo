import React from 'react';
import {
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import Landing from '../components/landing/Landing';
import Education from '../components/education/Education';
import Artwork from '../components/Artwork/Artwork';


export default () => (
  <Switch> 
    <Route exact path="/" render={() => <Landing/>}/>;
    <Route exact path="/education" render={() => <Education/>}/>;
    <Route exact path="/artwork" render={() => <Artwork/>}/>;
    <Redirect to="/"/>
  </Switch>  
);