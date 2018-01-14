import React from "react"
import {connect} from "react-redux"

// Importing components
import Header from "./dumb/Header.jsx"
import ContainerOverlay from "./dumb/ContainerOverlay.jsx"
import ColumnsContainer from "./smart/ColumnsContainer.jsx"
import LittleLine from "./dumb/LittleLine.jsx"
import WorkersContainer from "./smart/WorkersContainer.jsx"
// Customize components
import Customize from "./Customize/Container.jsx"
import CustomizeButton from "./Customize/Button.jsx"
import DownloadButton from "./dumb/DownloadButton.jsx"

class Wrapper extends React.Component {
	render() {
		return (
			<div className="wrapper">
				<div className="preview" id="data">
					<ContainerOverlay background={this.props.image.headerBackground}>
						<Header as="h1" title={this.props.text.header} />
						<p>{this.props.text.headerDescription}</p>
					</ContainerOverlay>
					<LittleLine />
					<ColumnsContainer />
					<LittleLine />
					<WorkersContainer />
				</div>
				<div className="customize">
					<Customize />
				</div>
				<CustomizeButton />
				<DownloadButton />
			</div>
		)
	}
}

export default connect(
	state => ({
		text: state.text,
		image: state.image
	}),
	dispatch => ({})
)(Wrapper)
		