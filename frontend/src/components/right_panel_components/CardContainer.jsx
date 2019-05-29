import React, { Component } from 'react';
import axios from 'axios';

// COMPONENT IMPORTS
import Card from './Card';

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bills: []
    }

    this.getBills = this.getBills.bind(this);
  }

  getBills() {
    axios.get('http://localhost:5000/bills')
      .then(res => this.setState({ bills: res.data }));
  };

  componentDidMount() {
    this.getBills();
  }

  render() {
    return(
      <div className="card-container">
        {this.state.bills.map(bill => (
          <Card
            name={bill.name}
            date_due={bill.date_due}
            amount={bill.amount}
            type={bill.type}
          />
        ))}
      </div>
    )
  };
}

export default CardContainer;