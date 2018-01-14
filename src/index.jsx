import React from "react"
import {render} from "react-dom"
import store from "./store/store.js"
import {Provider} from "react-redux"
import Wrapper from "./Wrapper/Wrapper.jsx"
class App extends React.Component {
	render() {
		return (
			<Provider store={store}>
				<Wrapper />
			</Provider>			
		)
	}
}

render(<App />, document.querySelector('#app'))