import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {dealCard, removeCard} from '../../actions/card';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore();

test('should return deal card action object', () => {
    const card = {value: 'A', suit:'S'};
    store.dispatch(dealCard(card));
    const action = store.getActions();

    expect(action[0]).toEqual({
        type: 'DEAL_CARD',
        card
    })
});

test('should return remove card action object', () => {
    store.dispatch(removeCard());
    const action = store.getActions();

    expect(action[1]).toEqual({
        type: 'REMOVE_CARD'
    })
});