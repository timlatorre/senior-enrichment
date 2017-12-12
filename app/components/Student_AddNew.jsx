import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postStudent } from '../reducers/student';
import { fetchCampuses } from '../reducers/campus';
import Campus_Select from './Campus_Select'

function Student_AddNew(props) {
  const { handleSubmit, loadCampuses } = props;
  return (
    <form id="new-campus-form" onSubmit={props.handleSubmit}>
      <div>
        <div><label htmlFor="name">Add a Student</label></div>
        <div><input type="text" name="studentName" /></div>
        <div><input type="text" name="studentEmail" /></div>
        <div><input type="text" name="studentGPA" /></div>
        <div>
          <Campus_Select />
        </div>
        <div><button type="submit">Add Student</button></div>
      </div>
    </form>
  )
}

function mapStateToProps(storeState) {
  return {
    campuses: storeState.campuses
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
      const student = { firstName, lastName, email, gpa, campusId};
      dispatch(postStudent(student));
    }
  };
}

const StudentAddNewContainer = connect(mapStateToProps, mapDispatchToProps)(Student_AddNew);
export default StudentAddNewContainer;