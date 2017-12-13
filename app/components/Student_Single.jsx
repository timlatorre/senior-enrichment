import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchStudents } from '../reducers/student';

class Student_Single extends Component {
  componentDidMount () {
    this.props.loadStudents();
  }

  render() {
    const studentId = Number(this.props.match.params.id);
    const currentStudent = this.props.students.filter(student => studentId === student.id);

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
    students: storeState.students
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadStudents: function () {
      dispatch(fetchStudents());
    }
  };
}

const SingleStudentContainer = connect(mapStateToProps, mapDispatchToProps)(Student_Single);
export default SingleStudentContainer;