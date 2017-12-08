import axios from 'axios';

// ACTION TYPES & CREATORS -------------------->
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT'
const GET_STUDENTS = 'GET_STUDENTS'

// ACTION CREATORS ---------------------------->
export function getStudent (student) {
  const action = { type: GET_SINGLE_STUDENT, student }
  return action
}

export function getStudents (students) {
  const action = { type: GET_STUDENTS, students }
  return action
}

// THUNK CREATORS ---------------------------->
export function fetchSingleStudent (studentId) {
  return function thunk (dispatch) {
    return axios.get(`/api/students/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = getStudent(student);
        dispatch(action)
      });
  };
}

export function fetchStudents () {
  return function thunk (dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
      });
  };
}

// REDUCER -------------------------------------->
export default function reducer (state = [], action){
  switch(action.type) {
    case GET_SINGLE_STUDENT:
      return action.student
    case GET_STUDENTS:
      return action.students;
    default:
      return state;
  }
}