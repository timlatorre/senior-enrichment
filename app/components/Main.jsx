import React from 'react';
import axios from 'axios';
import {render} from 'react-dom'
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Navbar';
import Campuses from './Campuses';
import Campus_Single from './Campus_Single';
import Campus_AddNew from './Campus_AddNew'
import Students from './Students';
import Student_Single from './Student_Single'
import Student_AddNew from './Student_AddNew'
import Student_Update from './Student_Update'

export default class Main extends Component {

  render() {
    return (
      <div>
        <Navbar />
        <h1>Welcome</h1>
        <Switch>
          <Route exact path="/campuses" component={Campuses} />
          <Route exact path="/campuses/:id" component={Campus_Single} />
          <Route path="/addCampus" component={Campus_AddNew} />
          <Route exact path="/students" component={Students} />
          <Route exact path="/students/:id" component={Student_Single} />
          <Route path="/updateStudent/:id" component={Student_Update} />
          <Route path="/addStudent" component={Student_AddNew} />
          <Redirect to="/campuses" />
        </Switch>
      </div>
    )
  }
}