import React from "react"

const Header = props => (
	<div className='header'>
		{props.as == "h2" ?
			(<h2>{props.title}</h2>)
			: (<h1>{props.title}</h1>)}
	</div>
)

export default Header;