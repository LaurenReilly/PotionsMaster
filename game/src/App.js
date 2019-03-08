import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Switch, Route} from 'react-router-dom';
import Game from './components/Game';
import Login from './components/Login'



class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path="/game" component={Game}/>
          <Route path="/login" component={Login}/>
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
