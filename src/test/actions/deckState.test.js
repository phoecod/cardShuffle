import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';
import {setDeckState} from '../../actions/deckState';

const createMockStore = configureMockStore([thunk]);
const store = createMockStore();

test('should return setDeckState action object', () =>{
    const isDeckEmpty = true;
    store.dispatch(setDeckState(isDeckEmpty));
    const action = store.getActions();

    expect(action[0]).toEqual({
        type: 'SET_DECK_STATE',
        isDeckEmpty
    })
})