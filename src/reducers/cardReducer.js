const defaultState = {
	deck: [],
	card: {},
	isFull: null,
	isEmpty: null
};


export default (state = defaultState.card, action) => {

	switch (action.type) {
		case 'DEAL_CARD':
			return action.card;
		case 'REMOVE_CARD':
			return {}; 
		default:
			return state;
	}
}