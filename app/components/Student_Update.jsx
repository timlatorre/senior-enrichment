import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putStudent } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';
import { fetchStudents } from '../reducers/student';
import Campus_Select from './Campus_Select'

class Student_Update extends Component {
  constructor() {
    super();
    this.state = {
      redirectComponent: false
    }
  }

  componentDidMount() {
    this.props.loadCampuses();
    this.props.loadStudents();
  }

  pageRedirect(){
    this.setState({ redirectComponent: true })
  }

  render() {
    const studentId = Number(this.props.match.params.id);
    const currentStudent = this.props.students.filter(student => studentId === student.id);
    const { redirectComponent } = this.state;
    return (
      <form id="new-campus-form" onSubmit={evt => this.props.handleSubmit(evt)}>
        {currentStudent && currentStudent.map(student => (
          <div key={student.id}>
            <div><label htmlFor="name">Update</label></div>
            <input type="hidden" name="studentId" value={studentId} />
            <div><input type="text" name="studentName" defaultValue={student.name} ref={(input) => this.input = input} /></div>
            <div><input type="text" name="studentEmail" defaultValue={student.email} ref={(input) => this.input = input} /></div>
            <div><input type="text" name="studentGPA" defaultValue={student.gpa} /></div>
            <div>
              <Campus_Select active={student.campusId}/>
            </div>
            <div><button type="submit">Update</button></div>
            {redirectComponent && (
              <Redirect to={`students/${studentId}`}/>
            )}
          </div>
        ))}
      </form>
    )
  }
}

function mapStateToProps(storeState) {
  return {
    campuses: storeState.campuses,
    students: storeState.students
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadStudents: function () {
      dispatch(fetchStudents());
    },
    loadCampuses: function () {
      dispatch(fetchCampuses());
    },
    handleSubmit: function (evt) {
      evt.preventDefault();
      const id = Number(evt.target.studentId.value);
      const fullName = evt.target.studentName.value.split(' ');
      const firstName = fullName[0];
      const lastName = fullName[1];
      const email = evt.target.studentEmail.value;
      const gpa = evt.target.studentGPA.value;
      const campusId = Number(evt.target.campusSelect.value);
      const student = { id, firstName, lastName, email, gpa, campusId };
      dispatch(putStudent(student));
    }
  };
}

const StudentUpdateNewContainer = connect(mapStateToProps, mapDispatchToProps)(Student_Update);
export default StudentUpdateNewContainer;