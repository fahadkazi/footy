import { combineReducers } from 'redux'
import TeamsReducer from './TeamsReducer'

const rootReducer = combineReducers({
	teams: TeamsReducer
})

export default rootReducer