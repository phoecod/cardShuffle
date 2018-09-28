import React from 'react';
import {connect} from 'react-redux';

const Deck = (props) => {
    return (
        <div className="card-container">
            {props.deckLength > 0 && <img className="card-img" src={'/imgs/deck/png/back.png'} />}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        deckLength: state.deck.length
    }
}

export default connect(mapStateToProps,undefined)(Deck);