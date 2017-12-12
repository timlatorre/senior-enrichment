import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCampuses } from '../reducers/campus';

class Campus_Select extends Component {
  componentDidMount() {
    this.props.loadCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    console.log("active is", this.props.active)
    return (
      <select name="campusSelect">
        {campuses && campuses.map(campus => (
          <option key={campus.id} value={campus.id} defaultValue={campus.id === this.props.active}>{campus.name}</option>
        ))}
      </select>
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

const CampusSelectContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_Select);
export default CampusSelectContainer;