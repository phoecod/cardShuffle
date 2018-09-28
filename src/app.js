import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import store from './store/configureStore';
import {setDeck} from './actions/deck';
import {createDeck} from './cardActions/cardActions';
import {setDeckState} from './actions/deckState';
import {Provider} from 'react-redux';
import './styles/styles.scss';

const newDeck = (createDeck());

store.dispatch(setDeck(newDeck));
store.dispatch(setDeckState(false));

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));