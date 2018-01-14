import React from "react"

const ColumnItem = props => (
	<div className="column-item">
		<img src={props.item.image} alt="" className="column-item--image" />
		<h3 className="column-item--title">
			{props.item.title}
		</h3>
		<p className="column-item--description">
			{props.item.description}
		</p>
	</div>
)

export default ColumnItem;