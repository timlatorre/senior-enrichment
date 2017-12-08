import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/campusReducer';

class Campuses extends Component {
  componentDidMount () {
    this.props.loadCampuses();
  }

  render() {
    return(
      <ul>
        {this.props.campuses.map(campus => (
          <li key={campus.id}>{campus.name}, {campus.description}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    campuses: storeState.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadCampuses: function(){
      dispatch(fetchCampuses());
    }
  };
}

const CampusesContainer = connect(mapStateToProps, mapDispatchToProps)(Campuses);
export default CampusesContainer;