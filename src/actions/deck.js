export const setDeck = (deck) => ({
	type: 'SET_DECK',
	deck
});

export const removeFromDeck = (card) => ({
	type: 'REMOVE_FROM_DECK',
	card
});