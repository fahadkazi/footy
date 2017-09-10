import axios from 'axios'
const API_URL = 'http://api.football-data.org/v1/competitions/445/leagueTable'

export const FETCH_TEAMS = 'FETCH_TEAMS'

export function fetchTeams() {
	const request = axios.get(API_URL)

	console.log('request', request)

	return {
		type: FETCH_TEAMS,
		payload: request
	};
}