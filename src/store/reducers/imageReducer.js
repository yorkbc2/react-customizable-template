import init from "./../init/image.js"
import createStateObject from "./../createStateObject.js"
export default function imageReducer (state=init, action) {
	switch (action.type) {
		case "CHANGE_IMAGE_DYNAMIC": {
			let newState = {};
			newState[action.payload.key] = action.payload.value;
			return createStateObject(newState, state)
		}
		default : {
			return state;
		}
	}
}