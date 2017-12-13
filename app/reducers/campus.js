import axios from 'axios';

// ACTION TYPES ------------------------------->
const GET_CAMPUSES = 'GET_CAMPUSES'
const ADD_CAMPUS = 'ADD_CAMPUS'
const UPDATE_CAMPUS = 'UPDATE_CAMPUS'

// ACTION CREATORS ---------------------------->
export function getCampuses(campuses) {
  const action = { type: GET_CAMPUSES, campuses }
  return action
}

export function addCampus(campus) {
  const action = { type: ADD_CAMPUS, campus }
}

export function updateCampus(campus) {
  const action = { type: UPDATE_CAMPUS, campus }
}

// THUNK CREATORS ---------------------------->
export function fetchCampuses() {
  return function thunk(dispatch) {
    return axios.get('/api/campuses')
      .then(res => res.data)
      .then(campuses => {
        const action = getCampuses(campuses);
        dispatch(action)
      });
  };
}

export function postCampus(campus) {
  return function thunk(dispatch) {
    return axios.post('/api/campuses/addCampus', campus)
      .then(res => res.data)
      .then(newCampus => {
        const action = getCampuses(newCampus);
        dispatch(action);
      });
  };
}

export function putCampus(update) {
  return function thunk(dispatch) {
    return axios.put('/api/campuses/updateCampus', update)
      .then(res => res.data)
      .then(newCampus => {
        const action = updateCampus(newCampus);
        dispatch(action);
      });
  };
}

// REDUCER -------------------------------------->
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_CAMPUSES:
      return action.campuses;
    case ADD_CAMPUS:
      return action.campus;
  case UPDATE_CAMPUS:
      return [...state.filter(stateCampus => action.campus.id !== stateCampus.id), action.campus];
    default:
      return state;
  }
}