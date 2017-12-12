import React from 'react';
import {connect} from 'react-redux';
import { postCampus } from '../reducers/campus';

function Campus_AddNew (props) {
  const { handleSubmit } = props;

  return (
    <form id="new-campus-form" onSubmit={props.handleSubmit}>
      <div>
        <div><label htmlFor="name">Add a Campus</label></div>
        <div><input type="text" name="campusName" /></div>
        <div><textarea name="campusDescription" ></textarea></div>
        <div><input type="text" name="campusImg" /></div>
        <div><button type="submit">Create Campus</button></div>
      </div>
    </form>
  )
}

function mapStateToProps (storeState) {
  return {

  };
}

function mapDispatchToProps (dispatch) {
  return {
    handleSubmit: function(evt) {
      evt.preventDefault();
      const name = evt.target.campusName.value;
      const description = evt.target.campusDescription.value;
      const imageUrl = evt.target.campusImg.value;
      const campus = { name, imageUrl, description };
      dispatch(postCampus(campus));
    }
  };
}

const CampusAddNewContainer = connect(mapStateToProps, mapDispatchToProps)(Campus_AddNew);
export default CampusAddNewContainer;