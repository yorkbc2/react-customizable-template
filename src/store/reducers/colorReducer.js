import init from "./../init/color.js"
import createStateObject from "./../createStateObject.js"
export default function colorReducer (state=init, action) {
	switch (action.type) {
		case "CHANGE_COLOR": {
			return createStateObject({mainColor: action.payload}, state);
		}
		default: {
			return state;
		}
	}
}