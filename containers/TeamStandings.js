import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchTeams } from '../Actions/index'

class TeamStandings extends Component {
	componentDidMount() {
		this.props.dispatch(fetchTeams());
	}
	renderList() {
		return this.props.teams.map((team, index) => {
			return (
				<tr key={`team-list-${index}`}>
					<td><img src={team.crestURI} width="24" height="24" /></td>
					<td className="mdl-data-table__cell--non-numeric">{team.teamName}</td>
					<td>{team.playedGames}</td>
					<td>{team.points}</td>
				</tr>
			)
		})
	}
	render () {
		return (
			<div>
				<table className="mdl-data-table mdl-js-data-table mdl-shadow--2dp">
				  <thead>
				    <tr>
				    	<th></th>
						<th className="mdl-data-table__cell--non-numeric">Team Name</th>
						<th>Games</th>
						<th>Points</th>
				    </tr>
				  </thead>
				  <tbody>
					{this.renderList()}
				  </tbody>
				</table>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log(state)
	return {
		teams: state.teams
	}
}

export default connect(mapStateToProps)(TeamStandings)