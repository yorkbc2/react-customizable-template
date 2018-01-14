import React from "react"
import {connect} from "react-redux"
import ContainerOverlay from "./../dumb/ContainerOverlay.jsx"
import WorkerItem from "./../dumb/WorkerItem.jsx";
class WorkersContainer extends React.Component {
	render() {
		return (
			<ContainerOverlay background={this.props.image.workersBackground}
				full={false}>
				<h2 className="shadow-header">
					{this.props.text.workerHeader}
				</h2>
				<div className="workers-columns">
					{this.props.text.workers.map((item, index) => {
						return (
							<WorkerItem title={this.props.text.profileButton} key={index} item={item} />
							)
					})}

				</div>

			</ContainerOverlay>
		)
	}
}

export default connect(
	state => ({
		image: state.image,
		text: state.text
	}),
	dispatch => ({})
)(WorkersContainer)
		