import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchSingleCampus } from '../reducers/campusReducer';

class Campus_Single extends Component {
  componentDidMount () {
    const campusId = this.props.match.params.id;
    this.props.loadSingleCampus(campusId);
  }

  render() {
    const campus = this.props.campus
    return(
      <div>
        {campus.name}
      </div>
    );
  }
}

function mapStateToProps (storeState) {
  return {
    campus: storeState.campuses
  };
}

function mapDispatchToProps (dispatch) {
  return {
    loadSingleCampus: function(campusId){
      dispatch(fetchSingleCampus(campusId));
    }
  };
}

const SingleCampusContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_Single);
export default SingleCampusContainer;