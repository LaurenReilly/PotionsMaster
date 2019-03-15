import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Login';
import Rules from './components/Rules';
import GameOver from './components/GameOver';
import HighScores from './components/HighScores';
import UserScores from './components/UserScores';
import Logout from './components/Logout';
import Theme from './components/Theme';

import './app.css';

import { library } from '@fortawesome/fontawesome-svg-core';

import { faDungeon, faMusic, faPause } from '@fortawesome/free-solid-svg-icons';

library.add(faDungeon, faMusic, faPause);



// import Sound from 'react-sound';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/rules" component={Rules}/>
          <Route path="/game" component={Game}/>
          <Route path="/gameover" component={GameOver}/>
          <Route path="/userscores" component={UserScores}/>
          <Route path="/highscores" component={HighScores}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
        <div className="footer">
          <Theme/>
          <p className="text-center">Copyright 2019 by WitchScript</p>
        </div>
      </div>
    );
  }
}



let mapStateToProps = (state) => {
  return {
    name: state.name,
    recipe: state.recipe,
    username: state.username,
    score: state.score,
    userPotion: state.userPotion,
  }
}


export default withRouter(connect(mapStateToProps, null)(App));
