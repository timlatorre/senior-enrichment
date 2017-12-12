import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchSingleStudent } from '../reducers/student';

class Student_Single extends Component {
  componentDidMount () {
    const studentId = this.props.match.params.id;
    this.props.loadSingleStudent(studentId);
  }

  render() {
    const currentStudent = this.props.student;
    return(
      <div>
        {currentStudent && currentStudent.map(student => (
          <div key={student.id}>
            <Link to={`/updateStudent/${student.id}`}>Edit</Link>
            <h1>{student.name}</h1>
            <h2>Campus:</h2>
            <Link to={`/campuses/${student.campusId}`}>
              {student.campus.name}
            </Link>
          </div>
        ))}
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