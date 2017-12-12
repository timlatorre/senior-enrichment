import { combineReducers } from 'redux'
import students from './student'
import campuses from './campus'

const reducers = combineReducers({
  campuses,
  students
})
export default reducers;