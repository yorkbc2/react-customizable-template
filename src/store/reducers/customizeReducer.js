import init from "./../init/customize.js"

export default function customizeReducer (state=init, action) {
	switch (action.type) {
		case "TOGGLE_CUSTOMIZE_MENU": {
			return {
				isOpened: !state.isOpened
			}
		}
		default: {
			return state;
		}
	}
}