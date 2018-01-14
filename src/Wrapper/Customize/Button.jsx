import React from "react"
import {connect} from "react-redux"
const CustomizeButton = props => (
	<button className="customize-button" onClick={props.toggle} >
		{props.customize.isOpened === false? (<i className="fa fa-pencil" />)
			: (<i className="fa fa-times" />)}
	</button>
)

export default connect(
	state => ({
		customize: state.customize
	}),
	dispatch => ({
		toggle: () => {
			dispatch({type: "TOGGLE_CUSTOMIZE_MENU"})
		}
	})
)(CustomizeButton)