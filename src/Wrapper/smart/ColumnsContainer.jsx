import React from "react"
import {connect} from "react-redux"

import ColumnItem from "./../dumb/ColumnItem.jsx";

class ColumnsContainer extends React.Component {
	render() {
		return (
			<div className="columns-container">
				{this.props.text.columns.map((item, index) => {
					return (
						<ColumnItem item={item} key={index} />
					);
				})}
			</div>
		)
	}
}

export default connect(
	state => ({
		text: state.text
	}),
	dispatch => ({})
)(ColumnsContainer)
		