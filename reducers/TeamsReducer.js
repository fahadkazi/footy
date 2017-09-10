import { FETCH_TEAMS } from '../Actions/index'

export default function(state = [], action) {
	switch(action.type) {
		case FETCH_TEAMS:
			return state.concat(action.payload.data.standing)
	}
	return state
}