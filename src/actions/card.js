

export const startDealCard = (cardDealt) => {
    return (dispatch) => {
        dispatch(dealCard(cardDealt));
    }
	
}

export const dealCard = (card) => ({
    type: 'DEAL_CARD',
	card
});

export const removeCard = () => ({
    type: 'REMOVE_CARD'
});


