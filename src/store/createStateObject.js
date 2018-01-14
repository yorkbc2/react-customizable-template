export default function createStateObject (newState, prevState) {
	var returnedState = {};
	for (var k in prevState) {
		returnedState[k] = typeof newState[k] != 'undefined'? newState[k]: prevState[k];
	}
	return returnedState;
}