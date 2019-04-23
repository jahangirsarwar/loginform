import React, { Component } from "react";
import "./App.css";+
const emailRegex=RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_'{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
const formValid= formErrors=>{
let valid = true;
object.values(formErrors).forEach(val =>{ 
  val.length > 0 && (valid = false);
});
return valid;
}

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      firstName:null,
      lastName:null,
      email:null,
      password:null,
      formErrors:{
        firstName:"",
        lastName:"",
      email:"",
      password:"",
      }
    };

  }

  handleSubmit=e=>{
    e.preventDefault();
    if(formValid(this.state.formErrors)){
      console.log(
      --Submiting--
      First Name:${this.state.firstName}
      Last Name:${this.state.LastName}
      Email:${this.state.email}
      Password:${this.state.password}
        )

    }else{
      console.error('FORM INVALID - DISPLAY ERROR MESSAGE');
    }
  }
  handleChange=e=>{
    e.preventDefault();
    const{name,value}=e.target;
    let formErrors=this.state.formErrors;
    switch(name){
      case'firstName':
      formErrors.firstName=value.length<3&& value.length>0?"minimum three characters required"
      :"";
      break;
       case'lastName':
      formErrors.lastName=value.length<3&& value.length>0?"minimum three characters required"
      :"";
      break;
       case'email':
      formErrors.email=emailRegex.test(value)&& value.length>0?''
      :'invalid emal address';
      break;
       case'password':
      formErrors.password=value.length<3&& value.length>0?"minimum three characters required"
      :"";
      break;
      default:
      break;
    }
    this.setState({formErrors,[name]:value},()=>console.log(this.state))
  }
  render() {
    return <div className="wrapper">
    <div className="form-wrapper">
    <h1>Create Account</h1>
    <form onSubmit={this.handleSubmit} noValidate>

    <div className="firstName">
    <label htmlFor="firstName">First Name</label>

<Input type="text" noValidate className="" placeholder="First Name" Name="firstName"
onChange ={this.handleChange()}/>
    </div>

    <div className="lastName">
    <label htmlFor="lastName">Last Name</label>

<Input type="text" noValidate className="" placeholder="Last Name" Name="lastName"
onChange={this.handleChange}/>
    </div>


    <div className="email">
    <label htmlFor="email">email</label>

<Input type="email" noValidate className="" placeholder="Email" Name="email"
onChange={this.handleChange}/>
    </div>
    

    <div className="password">
    <label htmlFor="password">Password</label>

<Input type="password" noValidate className="" placeholder="Password" Name="password"
onChange={this.handleChange}/>
    </div>
    <div className="CreateAccount">
    <button type="Submit">
    Create Account
    </button>
    <small>
    Alreadt have an account?
    </small>
    </div>

    



    </form>

    </div>
    </div>;
  }
}

export default App;
