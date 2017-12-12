import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchStudents, destroyStudent } from '../reducers/student';

class Students extends Component {
  componentDidMount() {
    this.props.loadStudents();
  }

  render() {
    const students = this.props.students;
    return (
      <div>
        <Link to={'/addStudent'}>Add New Student</Link>
        <ul>
          {students && students.map(student => (
            <div key={student.id}>
              <Link to={`/students/${student.id}`}>
                <li>{student.name}</li>
              </Link>
              <button type="button" value={student.id} onClick={(evt) => this.props.deleteStudent(evt)}>X</button>
            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(storeState) {
  return {
    students: storeState.students
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents: function () {
      dispatch(fetchStudents());
    },
    deleteStudent: function(evt) {
      const studentId = evt.target.value
      console.log("studentId is", studentId)
      dispatch(destroyStudent(studentId));
    }
  };
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);
export default StudentsContainer;