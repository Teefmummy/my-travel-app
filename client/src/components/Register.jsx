import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name:'',
      email:'',
      hashpassword:'',
      authenticated: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({
      [name]:e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.setState({
      name:'',
      email:'',
      hashpassword: '',
      authenticated: !this.state.authenticated
    })
  }

  render(){
     return(
     <div>
        {this.state.authenticated && <Redirect to='/'/>};
        <form onSubmit={this.handleSubmit}>
          <h1>Register</h1>
          <label htmlFor="name"> Name: </label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>

          <br/> <label htmlFor="Email"> Email: </label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>

          <br/> <label htmlFor="Password"> Password: </label>
          <input type="password" value={this.state.hashpassword} name="hashpassword" onChange={this.handleChange}></input>
          <br/>
          <button value="Register">Register</button>
        </form>
     </div>
  )}


}


export default Register
