import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
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

   //send username and password to database to check if user exists and password matches (change route to users/register for the future registration form)
   handleSubmitLogin(e){
    e.preventDefault();
    axios.post('/users/login', {
        username: this.state.username,
        password: this.state.password
      })
      .then( (response) => {
        this.props.login(this.state.username);
        this.props.history.push('/rules')
      })
      .catch(function (error) {
        console.log(error);
      });
    }

    handleSubmitRegister = (e) => {
        e.preventDefault();
        axios.post('/users/register', {
            username: this.state.username,
            password: this.state.password
            })
            .then( (response) => {
            this.handleSubmitLogin(e);
            })
            .catch(function (error) {
            console.log(error);
            });
        }
    //updating state with the input text as it changes
    handleChangeUser = (e) => {
        this.setState({...this.state, username: e.target.value})
    }

    handleChangePass = (e) => {
        this.setState({...this.state, password: e.target.value })
    }

    render() {
        return (
            <div>
                <div>
                    <h2>RETURNING USER:</h2>
                    <form onSubmit={(e) => this.handleSubmitLogin(e)}>
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
                <div>
                    <h2>NEW USER REGISTRATION:</h2>
                    <form onSubmit={(e) => this.handleSubmitRegister(e)}>
                        <label htmlFor="newUsername">Username:</label>
                        <input type="text" id="newUsername" name="username" required
                            onChange={(e) => this.handleChangeUser(e)} 
                            value={this.state.username}></input>
                        <label htmlFor="newPassword">Password:</label>
                        <input type="password" id="newPassword"  name="password" required
                            onChange={(e) => this.handleChangePass(e)} 
                            value={this.state.password}></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        )
    }
}

let mapStateToProps = (state) => {
    return {
      username: state.username,
    }
  }

let mapDispatchToProps = (dispatch) => {
    return {
        login: (username) => dispatch({type: "LOGIN", username: username}),
    }
}
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));