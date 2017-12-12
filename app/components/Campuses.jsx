import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { fetchCampuses } from '../reducers/campus';

class Campuses extends Component {
  componentDidMount () {
    this.props.loadCampuses();
  }

  render() {
    const campuses = this.props.campuses;
    return(
      <div>
        <Link to={'/addCampus'} className="btn btn-primary">Add New Campus</Link>
        <ul>
          {campuses && campuses.map(campus => (
            <div key={campus.id}>
              <Link to={`/campuses/${campus.id}`}>
                <li >{campus.name}, {campus.description}</li>
              </Link>
            </div>
          ))}
        </ul>
      </div>
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