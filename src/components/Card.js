import React from 'react';

const Card = (props) => {
    return (
        <div className="card-container">
            <img className="card-img" src={'/imgs/deck/png/' + props.card.value + props.card.suit + '.png'} />
        </div>
        
    );
}



export default Card;