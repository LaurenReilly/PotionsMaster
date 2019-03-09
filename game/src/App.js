import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Login';
import Rules from './components/Rules';
import GameOver from './components/GameOver';
import HighScores from './components/HighScores';
import UserScores from './components/UserScores';
import Logout from './components/Logout';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/rules" component={Rules}/>
          <Route path="/game" component={Game}/>
          <Route path="/gameover" component={GameOver}/>
          <Route path="/highscores" component={HighScores}/>
          <Route path="/userscores" component={UserScores}/>
          <Route path="/logout" component={Logout}/>
        </Switch>
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


export default connect(mapStateToProps, null)(App);
