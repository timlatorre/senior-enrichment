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
        <table>
          {students && students.map(student => (
            <tr key={student.id}>
              <td>
                {student.id}
              </td>
              <td>
                <Link to={`/students/${student.id}`}>
                  {student.name}
                </Link>
              </td>
              <td>
                {student.campus.name}
              </td>
              <button type="button" value={student.id} onClick={(evt) => this.props.deleteStudent(evt)}>X</button>
            </tr>
          ))}
        </table>
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
    deleteStudent: function (evt) {
      const studentId = evt.target.value
      dispatch(destroyStudent(studentId));
    }
  };
}

const StudentsContainer = connect(mapStateToProps, mapDispatchToProps)(Students);
export default StudentsContainer;