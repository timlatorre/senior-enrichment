import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus';
import Students_List from './Students_List';

class Campus_Single extends Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    console.log("this.props", this.props)
    const campusId = Number(this.props.match.params.id);
    const currentCampus = this.props.campuses.filter(campus => campusId === campus.id);
    return (
      <div>
        <Link to={`/updateCampus/${campusId}`}>Edit</Link>
        {currentCampus && currentCampus.map(campus => (
          <div key={campus.id}>
            <h1>{campus.name}</h1>
            <p>{campus.description}</p>
            <h2>Students:</h2>
            <Students_List students={campus.students} />
          </div>
        ))}
      </div>
    );
  }
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
    }
  };
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_Single);
export default SingleCampusContainer;