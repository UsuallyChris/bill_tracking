import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const {username, email, password} = this.state;
    const user = {username, email, password};
    axios.post("http://localhost:8000/account/register/", user)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err.response.data);
      });
  }

  render() {
    return(
      <form onSubmit={this.onSubmit}>
        <input type="text" name="username" onChange={this.onChange} value={this.state.name}/>
        <input type="text" name="email" onChange={this.onChange} value={this.state.email}/>
        <input type="text" name="password" onChange={this.onChange} value={this.state.password}/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Register;