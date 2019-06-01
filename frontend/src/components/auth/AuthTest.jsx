import React, { Component } from 'react';

class AuthTest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: ''
    }
  }

  componentDidMount() {
    this.setState({
      key: this.props.match.params.key
    })
  }

  render() {
    return(
      <h1>{this.state.key}</h1>
    );
  };

};

export default AuthTest;