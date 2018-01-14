import React from "react"

import LinkColored from "./LinkColored.jsx"
const WorkerItem = (props) => (
	<div className="worker-item">
		<div className="worker-item--image">
			<img src={props.item.image} title={props.item.name} />
		</div>
		<div className="worker-item--content">
			<h3>{props.item.name}</h3>
			<p>{props.item.description}</p>
			<div className="worker-item--link">
				<LinkColored url={props.item.profile} title={props.title} />
			</div>
		</div>
	</div>
)

export default WorkerItem;