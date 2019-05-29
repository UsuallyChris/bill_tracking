import React, { Component } from 'react';

// COMPONENT IMPORTS
import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    }
  }

  render() {
    return(
      <div className="card-container">
        <Card />
      </div>
    )
  };
}

export default CardContainer;