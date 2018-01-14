import {createStore, combineReducers} from "redux"

// Importing reducers
import textReducer from "./reducers/textReducer.js";
import colorReducer from "./reducers/colorReducer.js";
import imageReducer from "./reducers/imageReducer.js";
import customizeReducer from "./reducers/customizeReducer.js"

// Creating root reducer
const rootReducer = combineReducers({
	text: textReducer,
	color: colorReducer,
	image: imageReducer,
	customize: customizeReducer
})

// Creating store
export default createStore(rootReducer)