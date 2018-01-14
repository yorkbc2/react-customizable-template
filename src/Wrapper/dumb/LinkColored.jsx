import React from "react"
import {connect} from "react-redux"

const LinkColored = props => (
	<a className="link-colored" href={props.url} 
		style={{
			backgroundColor: props.color.mainColor
		}} target="_blank">
		{props.title}
	</a>
)

export default connect(
	state => ({
		color: state.color,
		text: state.text
	}),
	dispatch => ({})
)(LinkColored)
		