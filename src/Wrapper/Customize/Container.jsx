import React from "react"
import {connect} from "react-redux"

import Input from "./Input.jsx"
import ColumnsContainer from "./ColumnsContainer.jsx"
import ColorInput from "./ColorInput.jsx"
class CustomizeContainer extends React.Component {
	render() {
		return (
			<div className={this.props.customize.isOpened === false?
				"customize-container": "customize-container opened"}>

				<ColorInput onChange={(color) => this.props.changeColor(color)} value={this.props.color.mainColor} />

				<Input onChange={
					(txt) => this.props.changeText({
							key: "header",
							value: txt
						})
					} 
					value={this.props.text.header}
					label="Title in header..." />

				<Input onChange={
					(txt) => this.props.changeText({
							key: "headerDescription",
							value: txt
						})
					} 
					value={this.props.text.headerDescription}
					label="Description in header" />

				<Input onChange={
					(txt) => this.props.changeImage({
							key: "headerBackground",
							value: txt
						})
					} 
					value={this.props.image.headerBackground}
					label="Background Image url" />

				<strong>About: </strong>
				{this.props.text.columns.map((item, index) => {
					return (
						<ColumnsContainer key={index}>
							<Input
								onChange={(txt) => {
									this.props.changeColumns({
										id: index, 
										key: "title",
										value: txt
									})
								}}
								value={item.title}
								label="Title for item in columns!"
							 />
							 <Input
								onChange={(txt) => {
									this.props.changeColumns({
										id: index, 
										key: "image",
										value: txt
									})
								}}
								value={item.image}
								label="image for item in columns!"
							 />
							 <Input
								onChange={(txt) => {
									this.props.changeColumns({
										id: index, 
										key: "description",
										value: txt
									})
								}}
								value={item.description}
								label="Description for item in columns!"
							 />
						</ColumnsContainer>
					)
				})}

				<strong>
					Workers:
				</strong>
				{this.props.text.workers.map((item, index) => {
					return (
						<ColumnsContainer key={index}>
							<Input
								onChange={(txt) => {
									this.props.changeWorkers({
										id: index, 
										key: "name",
										value: txt
									})
								}}
								value={item.name}
								label="Name of a worker"
							 />
							 <Input
								onChange={(txt) => {
									this.props.changeWorkers({
										id: index, 
										key: "image",
										value: txt
									})
								}}
								value={item.image}
								label="Avatar of a worker"
							 />
							 <Input
								onChange={(txt) => {
									this.props.changeWorkers({
										id: index, 
										key: "description",
										value: txt
									})
								}}
								value={item.description}
								label="About a worker"
							 />
							 <Input
								onChange={(txt) => {
									this.props.changeWorkers({
										id: index, 
										key: "profile",
										value: txt
									})
								}}
								value={item.profile}
								label="Profile link"
							 />

						</ColumnsContainer>
					)
				})}


			</div>
		)
	}
}

export default connect(
	state => ({
		customize: state.customize,
		image: state.image,
		text: state.text,
		color: state.color
	}),
	dispatch => ({
		changeText: pl => {
			dispatch({type: "CHANGE_TEXT_DYNAMIC", payload: pl})
		},
		changeImage: pl => {
			dispatch({type: "CHANGE_IMAGE_DYNAMIC", payload: pl})
		},
		changeColumns: pl => {
			dispatch({type: "CHANGE_COLUMNS", payload: pl})
		},
		changeColor: color => {
			dispatch({type: "CHANGE_COLOR", payload: color})
		},
		changeWorkers: pl => {
			dispatch({type: "CHANGE_WORKERS", payload: pl})
		}
	})
)(CustomizeContainer)
		