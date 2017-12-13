import axios from 'axios';

// ACTION TYPES & CREATORS -------------------->
const GET_STUDENTS = 'GET_STUDENTS'
const ADD_STUDENT = 'ADD_STUDENT'
const UPDATE_STUDENT = 'UPDATE_STUDENT'
const DELETE_STUDENT = 'DELETE_STUDENT'

// ACTION CREATORS ---------------------------->
export function getStudents(students) {
  const action = { type: GET_STUDENTS, students }
  return action
}

export function addStudent(student) {
  const action = { type: ADD_STUDENT, student }
  return action
}

export function updateStudent(student) {
  const action = { type: UPDATE_STUDENT, student }
  return action
}

export function deleteStudent(student) {
  const action = { type: DELETE_STUDENT, student }
  return action
}

// THUNK CREATORS ---------------------------->
export function fetchStudents() {
  return function thunk(dispatch) {
    return axios.get('/api/students')
      .then(res => res.data)
      .then(students => {
        const action = getStudents(students);
        dispatch(action)
      });
  };
}

export function postStudent(student) {
  return function thunk(dispatch) {
    return axios.post('/api/students/addStudent', student)
      .then(res => res.data)
      .then(newStudent => {
        const action = addStudent(newStudent);
        dispatch(action);
      });
  };
}

export function putStudent(update) {
  return function thunk(dispatch) {
    return axios.put('/api/students/updateStudent/', update)
      .then(res => res.data)
      .then(newStudent => {
        const action = updateStudent(newStudent);
        dispatch(action);
      });
  };
}

export function destroyStudent(studentId) {
  return function thunk(dispatch) {
    return axios.delete(`/api/students/delete/${studentId}`)
      .then(res => res.data)
      .then(student => {
        const action = deleteStudent(student);
        dispatch(action);
      });
  };
}

// REDUCER -------------------------------------->
export default function reducer(state = [], action) {
  switch (action.type) {
    case GET_STUDENTS:
      return action.students;
    case ADD_STUDENT:
      return [...state, action.student];
    case UPDATE_STUDENT:
      return [...state.filter(stateStudent => action.student.id !== stateStudent.id), action.student];
    case DELETE_STUDENT:
      return action.student;
    default:
      return state;
  }
}