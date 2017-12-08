import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/studentReducer';

class Students extends Component {
  componentDidMount () {
    this.props.loadStudents();
  }

  render() {
    console.log("this is", this)
    return(
      <ul>
        {this.props.students.map(student => (
          <li key={student.id}>{student.name}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    students: storeState.students
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: function(){
      dispatch(fetchStudents());
    }
  };
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);
export default StudentsContainer;