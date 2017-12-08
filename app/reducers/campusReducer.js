import axios from 'axios';

// ACTION TYPES & CREATORS -------------------->
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const GET_CAMPUSES = 'GET_CAMPUSES'

// ACTION CREATORS ---------------------------->
export function getCampus (campus) {
  const action = { type: GET_SINGLE_CAMPUS, campus }
  return action
}

export function getCampuses (campuses) {
  const action = { type: GET_CAMPUSES, campuses }
  return action
}

// THUNK CREATORS ---------------------------->
export function fetchSingleCampus (campusId) {
  return function thunk (dispatch) {
    return axios.get(`/api/campuses/${campusId}`)
      .then(res => res.data)
      .then(campus => {
        const action = getCampus(campus);
        dispatch(action)
      });
  };
}

export function fetchCampuses () {
  return function thunk (dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action)
      });
  };
}

// REDUCER -------------------------------------->
export default function reducer (state = [], action){
  switch(action.type) {
    case GET_SINGLE_CAMPUS:
    return action.campus
    case GET_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
}