import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {setDeck, removeFromDeck} from '../../actions/deck';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore();


test('should return setDeck action object', () =>{

    const deck = [
        {value:"10", suit:"H"},
        {value:"J", suit:"C"}
    ]
    store.dispatch(setDeck(deck));
    const action = store.getActions();

    expect(action[0]).toEqual({
        type: 'SET_DECK',
        deck
    })
});

test('should return removeFromDeck action object', () =>{

    const card = {value:"10", suit:"H"};
    store.dispatch(removeFromDeck(card));
    const action = store.getActions();

    expect(action[1]).toEqual({
        type: 'REMOVE_FROM_DECK',
        card
    })
});