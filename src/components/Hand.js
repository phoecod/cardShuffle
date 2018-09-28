import React from 'react';
import Card from './Card';
import Deck from './Deck';
import {connect} from 'react-redux';

export const Hand = (props) => {
    const deltCard = props.card;
    return (
        <div className="game-container">
              {!props.isDeckEmpty ? <Deck></Deck> : <div></div>}
            {Object.keys(deltCard).length > 0 && <Card card={deltCard} ></Card>}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        card: state.card,
        isDeckEmpty: state.isDeckEmpty
    }
}

export default connect(mapStateToProps, undefined)(Hand);