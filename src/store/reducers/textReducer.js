import init from "./../init/text.js";
import createStateObject from "./../createStateObject.js"
export default function textReducer (state=init, action) {
	switch (action.type) {
		case "CHANGE_TEXT_DYNAMIC": {
			let newState = {};
			newState[action.payload.key] = action.payload.value;
			return createStateObject(newState, state)
		}
		case "CHANGE_COLUMNS": {
			let id = action.payload.id,
				key = action.payload.key,
				value = action.payload.value,
				newState = {columns: state.columns}
			newState.columns[id][key] = value;
			return createStateObject(newState, state);
		}
		case "CHANGE_WORKERS": {
			let id = action.payload.id,
				key = action.payload.key,
				value = action.payload.value,
				newState = {workers: state.workers}
			newState.workers[id][key] = value;
			return createStateObject(newState, state);
		}
		default : {
			return state;
		}
	}
}