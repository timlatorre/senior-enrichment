import React, { Component } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Campuses from './Campuses';
import Campus_Single from './Campus_Single';
import Students from './Students';
import Student_Single from './Student_Single'

export default class Main extends Component {
  constructor(props) {
    super(props)

  }


  render() {
    return (
      <Router>
        <div>
          <h1>Home</h1>
          <Route exact path="/campuses" component={Campuses} />
          <Route path="/campuses/:id" component={Campus_Single} />
          <Route exact path="/students" component={Students} />
          <Route path="/students/:id" component={Student_Single} />
        </div>
      </Router>
    )
  }
}