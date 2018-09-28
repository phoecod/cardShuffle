import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import deckReducer from '../reducers/deckReducer';
import cardReducer from '../reducers/cardReducer';
import deckStateReducer from '../reducers/deckStateReducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default createStore (
    combineReducers ({
		deck: deckReducer,
		card: cardReducer,
		isDeckEmpty: deckStateReducer
	}),
	composeEnhancers (
		applyMiddleware(thunk)
	)
);