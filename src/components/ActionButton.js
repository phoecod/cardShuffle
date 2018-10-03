import React from 'react';
import {connect} from 'react-redux';
import {startDealCard, removeCard} from '../actions/card';  
import {setDeck} from '../actions/deck';  
import {setDeckState} from '../actions/deckState';  
import {removeFromDeck} from '../actions/deck';  
import {shuffle, createDeck} from '../cardActions/cardActions';

export class ActionButton extends React.Component {
    constructor (props) {
        super(props);
    }
    componentDidUpdate() {
        const deckLength = this.props.deck.length;
        if (deckLength === 0) {
            console.log("reset");
            this.props.setDeckState(true);
        }
    }

    handleShuffle = () => {
        if (this.props.isDeckEmpty) {
            this.props.removeCardFromState();
            this.props.setDeck(shuffle(createDeck()));
            this.props.setDeckState(false);
        } else {
            this.props.setDeck(shuffle(this.props.deck));
        }
    }

    handleDeal = () => {
        const deckLength = this.props.deck.length;
        const deck = this.props.deck;
        
        if (!this.props.isDeckEmpty) {
            const cardIndex = Math.floor(Math.random() * deckLength);
            this.props.startDealCard(deck[cardIndex]);
            this.props.removeFromDeck(deck[cardIndex]);
        }
    }

    render () {
        return (
            <div className="btn-container">
                <button className="btn shuffle" onClick={this.handleShuffle}>Shuffle</button>
                <button type="button" disabled={this.props.isDeckEmpty} 
                        className={this.props.isDeckEmpty ? "btn deal disabled" : "btn deal"} 
                        onClick={this.handleDeal}>Deal
                </button>
            </div>
            
        )
    }
}

const mapDispatchToProps = (dispatch) => {
	return {
        startDealCard: (card) =>  dispatch(startDealCard(card)),
        setDeck: (deck) => dispatch(setDeck(deck)),
        removeCardFromState: () => dispatch(removeCard()),
        removeFromDeck: (card) => dispatch(removeFromDeck(card)),
        setDeckState: (state) => dispatch(setDeckState(state))
	}
}

const mapStateToProps = (state) => {
    return {
        card: state.card,
        deck: state.deck,
        isDeckEmpty: state.isDeckEmpty
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ActionButton);