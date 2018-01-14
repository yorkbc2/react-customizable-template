import React from "react"

const ColumnsContainer = props =>  {
	var id = (((Math.random() * 60) * (Math.random() * 60))+'').replace(".","_");
	return (
		<div className="customize-column">
			Column Case <i className='fa fa-chevron-down' onClick={(ev) => {
				document.getElementById(id).style.display = 
					document.getElementById(id).style.display == "none"? "block": "none"
			}} />: 
			<div id={id} style={{display: 'none'}} >
				{props.children}
			</div>
		</div>
	)
}

export default ColumnsContainer