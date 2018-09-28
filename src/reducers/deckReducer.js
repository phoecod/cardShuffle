const defaultState = {
	deck: [],
	card: {},
	isEmpty: null
};


export default (state = defaultState.deck, action) => {

	switch (action.type) {
		case 'SET_DECK':
			return action.deck;
		case 'REMOVE_FROM_DECK':
			const newDeck = state.filter((card) => {
				return JSON.stringify(card) !== JSON.stringify(action.card);
			});
			return newDeck;	
		default:
			return state;
	}
}