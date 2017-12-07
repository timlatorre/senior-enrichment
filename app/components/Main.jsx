import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Campuses from './Campuses';
import Students from './Students';

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      campuses: []
    };
  }

  render() {
    return (
      <Router>
        <div>
          <h1>Home</h1>
          <Campuses />
        </div>
      </Router>
    )
  }
}