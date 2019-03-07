import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom'
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: "",
            redirect: false
        }
    }

   //send username and password to database
   handleSubmit(e){
    e.preventDefault();
    axios.post('/users/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then(function (response) {
        this.setState({...this.state, redirect: true});
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    
    }
    //updating state with the input text as it changes
    handleChangeUser(e) {
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePass(e) {
        this.setState({...this.state, password: e.target.value })
    }

    renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect to='/target' />
        }
      }

    render() {
        return (
            <div>
                {this.renderRedirect()}
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" required
                        onChange={(e) => this.handleChangeUser(e)} 
                        value={this.state.username}></input>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password"  name="password" required
                        onChange={(e) => this.handleChangePass(e)} 
                        value={this.state.password}></input>
                    <input type="submit" value="Submit"></input>
                </form>
            </div>
        )
    }
}

export default Login;