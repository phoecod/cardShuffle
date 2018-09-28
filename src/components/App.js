import React from 'react';
import Hand from './Hand.js';
import ActionButton from '../components/ActionButton.js';
import { hot } from 'react-hot-loader'

const App = () => {
    return (
        <div className="container">
            <Hand></Hand>
            <ActionButton></ActionButton>
        </div>     
    )
}

export default hot(module)(App);