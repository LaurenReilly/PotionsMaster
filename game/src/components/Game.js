import React, { Component } from 'react';
import { connect } from 'react-redux';


class Game extends Component {
  render() {
    return (
      <div className="App">
        <p>{this.props.score}</p>
        <div>
          <h2>{this.props.name}</h2>
          {this.props.recipe.map((ingredient, i) => {
            if(i === 0) {
              return (<p>First add {ingredient}</p>)
            } else {
              return (<p>Then add {ingredient}</p>)
            }
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
            this.props.wrong();
            this.props.new();
          } else {
            this.props.new()
          }
        }
        }>BREW</button>
      </div>
    );
  }
}


//array of all possible potions
let potions = [
  {name: "luck", recipe: ["one", "two", "three"]},
  {name: "poison", recipe: ["three", "four", "five"]},
  {name: "love", recipe: ["four", "five", "six"]}
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
    wrong: () => dispatch({type: "WRONG"}),
    new: () => dispatch({type: "NEW", potion: newPotion()}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
