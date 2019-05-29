import React from 'react';

function Card(props) {
  return(
    <div className="card">
      <h3>{props.name}</h3>
      <hr/>
      <div className="card-details">
        <p>Date Due: {props.date_due}</p>
        <p>Amount Due: {props.amount}</p>
        <p>Type: {props.type}</p>
      </div>
    </div>
  );
};

export default Card;