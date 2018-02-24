import React, { Component } from 'react';
import Routes from './Routes';
import { BrowserRouter as Router } from 'react-router-dom';
import '../style/mystyle.css';
import Navigation from '../components/navigation/Navigation';

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <head>
            <meta charset="utf-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1"/>
            <link href="http://fonts.googleapis.com/css?family=Lato|Roboto+Condensed|Alegreya:700" rel="stylesheet" type="text/css" />
            <title>Shane Moyo</title>
          </head>
          <Navigation/>
          <Routes/>
        </div>
      </Router>
    );
  }
}

export default App;
