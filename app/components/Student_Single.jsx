import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchSingleStudent } from '../reducers/studentReducer';

class Student_Single extends Component {
  componentDidMount () {
    const studentId = this.props.match.params.id;
    this.props.loadSingleStudent(studentId);
  }

  render() {
    const student = this.props.student
    return(
      <div>
        {student.name}
      </div>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    student: storeState.students
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadSingleStudent: function(studentId){
      dispatch(fetchSingleStudent(studentId));
    }
  };
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student_Single);
export default SingleStudentContainer;