import React from "react"

function createBackgroundStyle(url) {
	return "url("+url+")"
}

const ContainerOverlay = props => (
	<div className="container-overlay" style={
		{
			backgroundImage: createBackgroundStyle(props.background),
			minHeight: props.full === false? "420px": "100vh"
		}
	}>
		<div className="container-overlay--filter" style={{
			minHeight: props.full === false? "420px": "100vh"
		}}>
			<div className="container-overlay--filter-inside"
				style={{
					paddingTop: props.full === false? "30px": "170px"
				}}>
				{props.children}
			</div>
		</div>
	</div>
)

export default ContainerOverlay;