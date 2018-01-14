import React from "react"

const ColorInput = props => (
	<div className="customize-input">
		<input type="color" onChange={(ev) => props.onChange(ev.target.value)} />
	</div>
)

export default ColorInput;