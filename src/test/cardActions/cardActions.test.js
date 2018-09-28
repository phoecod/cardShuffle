import {createDeck, shuffle} from '../../cardActions/cardActions';


test('should return a full french card deck', () => {
    const deck = createDeck();
    expect(deck).toHaveLength(52);
});