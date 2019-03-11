import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';
import axios from 'axios';



class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: this.props.username
    }

}

recordScore = () => {
  axios.post('/scores/record', {
      username: this.props.username,
      points: this.props.score
      })
      .then( (response) => {
      this.props.newGame();
      this.props.history.push('/gameover')
      })
      .catch(function (error) {
      console.log(error);
      });
  }


  render() {
    return (
      <div className="App">
        <p>{this.props.score}</p>
        <div>
          <h2>{this.props.name}</h2>
          {this.props.recipe.map((ingredient, i) => {
            return(
              <Ingredients key={i} i={i} ingredient={ingredient}/>
            )
          })}
        </div>
        <div>
          <button onClick={() => this.props.add("one")}>one</button>
          <button onClick={() => this.props.add("two")}>two</button>
          <button onClick={() => this.props.add("three")}>three</button>
          <button onClick={() => this.props.add("four")}>four</button>
          <button onClick={() => this.props.add("five")}>five</button>
          <button onClick={() => this.props.add("six")}>six</button>
        </div>
        <button onClick={() => {
          let status = check(this.props.recipe, this.props.userPotion)
          if (status === true ) {
            this.props.correct();
            this.props.new();
          } else if (status === false) {
            //record score in db, reset score, take user to game over screen
            this.recordScore();
          } else {
            this.props.new();
          }
        }
        }>BREW</button>
      </div>
    );
  }
}


//array of all possible potions
let potions = [
  {name: "Felix Felicis", recipe: ["one", "two", "three"]},
  {name: "Draught of Living Death", recipe: ["three", "four", "five"]},
  {name: "Polyjuice", recipe: ["four", "five", "six"]},
  {name: "Veritaserum", recipe: ["four", "five", "six"]},
  {name: "Amortentia", recipe: ["four", "five", "six"]},
  {name: "Pepperup", recipe: ["four", "five", "six"]},
  {name: "Confusion", recipe: ["four", "five", "six"]},
  {name: "Invisibility", recipe: ["four", "five", "six"]},
]

// functions to return one random potion from the array
let random = (max) => {
  return Math.floor(Math.random() * max);
}

let newPotion = () => {
  let potion = potions[random(potions.length)]
  return {
      name: potion.name,
      recipe: potion.recipe
  }
}

//check if the recipe matches the users potion ingredients
let check = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
      return false;
    }
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
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

let mapDispatchToProps = (dispatch) => {
  return {
    add: (ingredient) => dispatch({type: "ADD", ingredient: ingredient}),
    correct: () => dispatch({type: "CORRECT"}),
    newGame: () => dispatch({type: "NEW_GAME"}),
    new: () => dispatch({type: "NEW", potion: newPotion()}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
