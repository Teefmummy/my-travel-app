import React, { Component } from 'react';

class Login extends Component {
    constructor(props) {
      super(props);
      this.state = {
      email:'',
      hashpassword:''
      }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]:e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    console.log(this.props.onSubmit);
    this.props.onSubmit(this.state);
    this.setState({
      email:'',
      hashpassword: ''
    })
  }


  render(){
     return(
     <div>
        <form onSubmit={this.handleSubmit}>
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
