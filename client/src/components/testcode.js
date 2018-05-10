import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {value:''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(e) {
    this.setState = ({value:e.target.value})
  }

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {

     return(
     <div>
         <h3>Online Travel Concierge (OTC) Login Page </h3>
        <form onSubmit={this.handleSubmit}>
          <label> Name:
          <input type="text" value={this.state.value} name="name" onChange={this.handleChange}></input>
          </label>


          <button type="submit" value="Login">LOGIN</button>
        </form>
     </div>
  );
   };


}


export default Login

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     username:'',
  //     emailaddress:'',
  //     password:''
  //   };
  //   this.handleChange = this.handleChange.bind(this);
  //   this.handleSubmit = this.handleSubmit.bind(this);
  // }
  // handleChange(e) {
  //   const name = e.target.name
  //   this.setState = ({
  //     [name]:e.target.value
  //   })
  // }


  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.onSubmit(this.state)
  // }

  // <label for="name"> Name:

  // <label for="email"> Email: </label>
  //         <input type="text" value={this.state.email} name="emailadress" onChange={this.handleChange}></input>
  //         <label for="password"> Password: </label>
  //         <input type="text" value={this.state.hashpassword} name="password" onChange={this.handleChange}></input>
