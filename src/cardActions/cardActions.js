export const createDeck = () => {
    const values = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
    const suits = ['S', 'C', 'H', 'D'];

    const deck = [];

    values.forEach( (value) => {
        suits.forEach( (suit) => {
            deck.push({ "value": value, "suit": suit});
        });
    });

    return shuffle(deck);
};

export const shuffle = (deck) => {
    if (deck.length > 0) {
        let j, temp, i;
        for (i = deck.length; i; i -= 1) {
            j = Math.floor(Math.random() * i);
            temp = deck[i - 1];
            deck[i - 1] = deck[j];
            deck[j] = temp;
        }
    } else {
        return createDeck ();
    }
    
    return deck;
}