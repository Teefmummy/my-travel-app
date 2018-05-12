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
    const {name, value} = e.target;
    this.setState({
      [name]:value
    });
    console.log(this.state);
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
    console.log(this.state);
  }


  render(){
     return(
     <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name"> Name: </label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>

          <br/> <label htmlFor="email"> Email: </label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>

          <br/> <label htmlFor="password"> Password: </label>
          <input type="text" value={this.state.hashpassword} name="hashpassword" onChange={this.handleChange}></input>
          <br/>
          <button value="Login">LOGIN</button>
        </form>
     </div>
  )}


}


export default Login
