import React from "react"
function returnRandom () {
	return ((Math.random() * 60) * (Math.random() * 60)+'').replace(".","_");
}
const CustomizeInput = (props)=> {
	var id=returnRandom()
	return (
		<div className="customize-input">
		<label htmlFor={id}>
			{props.label} 
			<button onClick={() => {
				document.getElementById(id).value = ""
			}} className="customize-input--clear">
				<i className="fa fa-times" />
			</button>
		</label>
		<input type="text" 
			id={id}
			className="customize-input--inside"
			placholder={props.label}
			onChange={(e) => props.onChange(e.target.value)}
			value={props.value} />
	</div>
		)
}

export default CustomizeInput