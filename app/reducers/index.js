import { combineReducers } from 'redux'
import studentReducer from './studentReducer'
import campusReducer from './campusReducer'

const combinedReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
})

export default combinedReducer
