import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
      super(props);


    this.state = {
    name:'',
    email:'',
    hashpassword:''
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
      hashpassword: ''
    })
  }

  render(){
     return(
     <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>

          <br/> <label htmlFor="Email"> Email: </label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>

          <br/> <label htmlFor="Password"> Password: </label>
          <input type="text" value={this.state.hashpassword} name="hashpassword" onChange={this.handleChange}></input>
          <br/>
          <button value="Login">LOGIN</button>
        </form>
     </div>
  )}


}


export default Login
