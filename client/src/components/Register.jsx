import React, { Component } from 'react';

class Register extends Component {
    constructor(props) {
      super(props);

    this.state = {
    name:'',
    email:'',
    password:''
    }
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    const name = e.target.name
    this.setState = ({
      [name]:e.target.value
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.state)
  }

  render(){
     return(
     <div>
         <h3>Online Travel Concierge (OTC) Registration Page </h3>
        <form onSubmit="this.handleSubmit">
          <label htmlFor="name"> Name: </label>
          <input type="text" value={this.state.name} name="name" onChange={this.handleChange}></input>

         <br/> <label htmlFor="Email"> Email: </label>
          <input type="text" value={this.state.email} name="email" onChange={this.handleChange}></input>
                  <br/> <label htmlFor="Password"> Password: </label>
          <input type="text" value={this.state.hashpassword} name="hashpassword" onChange={this.handleChange}></input>
          <br/>
          <button value="Register">REGISTER</button>
        </form>
     </div>
  )}


}


export default Register
