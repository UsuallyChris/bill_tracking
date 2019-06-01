import React, { Component } from 'react';
import axios from 'axios';

class VerifyNewUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      key: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.setState({
      key: this.props.match.params.key
    })
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {key, password} = this.state;
    const verifyEmail = {key, password};
    axios.post("http://localhost:8000/account/verify-email/", verifyEmail)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data);
      })
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" name="password" onChange={this.onChange} value={this.state.password}/>
        <button type="submit">Submit</button>
      </form>
    );
  };

};

export default VerifyNewUser;