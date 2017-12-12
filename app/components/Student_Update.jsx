import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStudent } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';
import { fetchSingleStudent } from '../reducers/student';
import Campus_Select from './Campus_Select'

class Student_Update extends Component {
  componentDidMount() {
    const studentId = this.props.match.params.id;
    this.props.loadCampuses();
    this.props.loadSingleStudent(studentId);
  }

  handleChange(evt){
    const value = evt.target.value;
  }

  render() {
    const currentStudent = this.props.student;
    return (
      <form id="new-campus-form">
        {currentStudent && currentStudent.map(student => (
          <div key={student.id}>
            <div><label htmlFor="name">Update</label></div>
            <div><input type="text" name="studentName" defaultValue={student.name} ref={(input) => this.input = input} /></div>
            <div><input type="text" name="studentEmail" defaultValue={student.email} ref={(input) => this.input = input} /></div>
            <div><input type="text" name="studentGPA" defaultValue={student.gpa} ref={(input) => this.input = input} /></div>
            <div>
              <Campus_Select defaultValue={student.campusId}/>
            </div>
            <div><button type="submit">Update</button></div>
          </div>
        ))}
      </form>
    )
  }
}

function mapStateToProps(storeState) {
  return {
    campuses: storeState.campuses,
    student: storeState.students
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSingleStudent: function (studentId) {
      dispatch(fetchSingleStudent(studentId));
    },
    loadCampuses: function () {
      dispatch(fetchCampuses());
    },
    handleSubmit: function (evt) {
      evt.preventDefault();
      const fullName = evt.target.studentName.value.split(' ');
      const firstName = fullName[0];
      const lastName = fullName[1];
      const email = evt.target.studentEmail.value;
      const gpa = evt.target.studentGPA.value;
      const campusId = evt.target.campusSelect.value;
      const student = { firstName, lastName, email, gpa, campusId };
      dispatch(putStudent(student));
    }
  };
}

const StudentUpdateNewContainer = connect(mapStateToProps, mapDispatchToProps)(Student_Update);
export default StudentUpdateNewContainer;