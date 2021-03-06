import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';

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
                <Header/>
                <div className="mt-4">
                    <div className="d-flex flex-row align-content-between">
                        <div className="intro">
                            <h3>Professor Snape thinks you're bad enough at potions that hes willing to teach you one on one!</h3>
                            <p>Well, actually he's not willing at all. He's doing this as a favor for Dumbledore.</p>
                            <p>Your task is to brew up as many perfect potions as you can while doing your best to not let Snape...er...<i>Professor</i> Snape distract you with his insults.</p>
                            <p>Professor Snape does not tolerate imperfection, one misstep and it's back to your common room!</p>
                        </div>
                        <div className="forms d-flex flex-column">
                            <div className="login">
                                <div className="m-auto">
                                    <h4 className="text-center">RETURNING USER:</h4>
                                    <form className="d-flex flex-row" onSubmit={(e) => this.handleSubmitLogin(e)}>
                                        <label className="mx-1" htmlFor="username">Username:</label>
                                        <input className="rounded" style={{}}type="text" id="username" name="username" required
                                            onChange={(e) => this.handleChangeUser(e)} 
                                            value={this.state.username}></input>
                                        <label className="mx-1" htmlFor="password">Password:</label>
                                        <input className="rounded" type="password" id="password"  name="password" required
                                            onChange={(e) => this.handleChangePass(e)} 
                                            value={this.state.password}></input>
                                        <input className="rounded ml-1" type="submit" value="Login"></input>
                                    </form>
                                </div>
                            </div>
                            <div className="register align-self-center mt-3">
                                <h4 className="text-center">NEW USER REGISTRATION:</h4>
                                <form className="d-flex flex-column"onSubmit={(e) => this.handleSubmitRegister(e)}>
                                    <label className="mx-1" htmlFor="newUsername">Username:</label>
                                    <input className="rounded" type="text" id="newUsername" name="username" required
                                        onChange={(e) => this.handleChangeUser(e)} 
                                        value={this.state.username}></input>
                                    <label className="mx-1 mt-3" htmlFor="newPassword">Password:</label>
                                    <input className="rounded" type="password" id="newPassword"  name="password" required
                                        onChange={(e) => this.handleChangePass(e)} 
                                        value={this.state.password}></input>
                                    <input className="rounded align-self-center mt-2" type="submit" value="Register"></input>
                                </form>
                            </div>
                        </div>
                    </div>
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