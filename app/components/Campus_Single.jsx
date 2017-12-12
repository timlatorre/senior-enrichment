import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSingleCampus } from '../reducers/campus';
import Students_List from './Students_List';

class Campus_Single extends Component {
  componentDidMount() {
    const campusId = this.props.match.params.id;
    this.props.loadSingleCampus(campusId);
  }

  render() {
    const currentCampus = this.props.campus
    return (
      <div>
        {currentCampus.map(campus => (
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
    campus: storeState.campuses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadSingleCampus: function (campusId) {
      dispatch(fetchSingleCampus(campusId));
    }
  };
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_Single);
export default SingleCampusContainer;