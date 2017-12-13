import React, { Component } from 'react';
import { connect } from 'react-redux';
import { putCampus } from '../reducers/campus';
import { fetchCampuses } from '../reducers/campus';
import { fetchStudents } from '../reducers/student';
import Campus_Select from './Campus_Select'

class Campus_Update extends Component {
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

  pageRedirect() {
    this.setState({ redirectComponent: true })
  }

  render() {
    console.log("this.props", this.props)
    const campusId = Number(this.props.match.params.id);
    const currentCampus = this.props.campuses.filter(campus => campusId === campus.id);
    const { redirectComponent } = this.state;
    return (
      <form id="new-campus-form" onSubmit={evt => this.props.handleSubmit(evt)}>
        {currentCampus && currentCampus.map(campus => (
          <div key={campus.id}>
            <div><label htmlFor="name">Update Campus</label></div>
            <input type="hidden" name="campusId" value={campusId} />
            <div><input type="text" name="campusName" defaultValue={campus.name} /></div >
            <div><textarea name="campusDescription" defaultValue={campus.description} ></textarea></div>
            <div><input type="text" name="campusImg" defaultValue={campus.imageUrl} /></div>
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
    students: storeState.students
  };
}

function mapDispatchToProps (dispatch) {
  return {
          loadStudents: function () {
          dispatch(fetchStudents());
        },
    loadCampuses: function () {
          dispatch(fetchCampuses());
        },
    handleSubmit: function(evt) {
          evt.preventDefault();
        const id = evt.target.campusId.value;
      const name = evt.target.campusName.value;
      const description = evt.target.campusDescription.value;
      const imageUrl = evt.target.campusImg.value;
      const campus = {id, name, imageUrl, description };
      dispatch(putCampus(campus));
    }
  };
}

const CampusUpdateNewContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_Update);
export default CampusUpdateNewContainer;