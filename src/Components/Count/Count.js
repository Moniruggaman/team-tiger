import React from 'react';
import './Count.css';

const Count = (props) => {
    const count = props.count;
    const totalCost = count.reduce((total, player) => total + player.salary, 0).toFixed(2);

    return (
        <div className="count-container">
            <h3>Number of players selected for Team-Tiger: {count.length}</h3>
            <p>Total team cost: ${totalCost}</p>
        </div>
    );
};

export default Count;