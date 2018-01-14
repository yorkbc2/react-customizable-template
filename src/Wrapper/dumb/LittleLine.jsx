import React from "react"
import {connect} from "react-redux"
const LittleLine = props => (
	<div className="little-line" style={{backgroundColor: props.color.mainColor}}></div>
)
export default connect(
	state => ({
		color: state.color
	})
)(LittleLine)