const defaultState = {
	deck: [],
	card: {},
	isDeckEmpty: null
};

export default (state = defaultState.isDeckEmpty, action) => {

	switch (action.type) {
		case 'SET_DECK_STATE':
			return action.isDeckEmpty;
		default:
			return state;
	}
}