import React, { Component } from 'react';
import { connect } from 'react-redux';
import Ingredients from './Ingredients';
import axios from 'axios';

import potions from './potions'
import snape from './audio/snape.png';

import Audio from "./Audio"

import cauldron from './audio/cauldron.png';
import lacewing from './audio/lacewing.png';
import boomslang from './audio/boomslang.png';
import bicorn from './audio/bicorn.png';
import dragon from './audio/dragon.png';
import beetle from './audio/beetle.png';
import newt from './audio/newt.png';

class Game extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: this.props.username,
      class: "first",
    }

  }

  // functions to return one random potion from the array
  random = (max) => {
    return Math.floor(Math.random() * max);
  }
  
  newPotion = () => {
    let potion = potions[this.random(potions.length)]
    return {
        name: potion.name,
        recipe: potion.recipe,
        insult: potion.insult
    }
  }

  recordScore = () => {
    axios.post('/scores/record', {
        username: this.props.username,
        points: this.props.score
        })
        .then( (response) => {
          this.props.history.push('/gameover')
        })
        .catch(function (error) {
          console.log(error);
        });
    }

  //work around to be able to replay the animation when the new ingredients list renders
  toggleClass = () => {
    if (this.state.class === "first") {
      this.setState({...this.state, class: "second"})
    } else if (this.state.class === "second") {
      this.setState({...this.state, class: "first"})
    }
  }

  //check if the recipe matches the users potion ingredients
  check = (arr1, arr2) => {
    if(arr1.length !== arr2.length){
      return false;
    }
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }
    return true;
}


 brew = () => {
  let status = this.check(this.props.recipe, this.props.userPotion)
  if (status === true ) {
    this.props.correct();
    this.toggleClass();
    let potion = this.newPotion();
    this.props.new(potion);
  } else if (status === false) {
    //record score in db, reset score, take user to game over screen
    this.recordScore();
  } else {
    let potion = this.newPotion();
    this.props.new(potion);
  }
}

  componentDidMount() {
    if(!this.props.username) {
        this.props.history.push('/')
    } else {
        this.props.newGame();
    }
  }
    
  render() {
      return (
        <div className="d-flex flex-column mt-3">
          <div className="snapesInstructions d-flex justify-content-between">
            <div className="d-flex flex-row no-wrap ml-1">
              <img src={snape} alt="Severus Snape" style={{width: 200, height: 200}}/>
              <h3 className="align-self-center">{this.props.insult}</h3>
            </div>
            <div className="mt-5">
              <h2 className="score" >Score:</h2>
              <h2 className="score text-center">{this.props.score}</h2>
            </div>
          </div>
          <div id="recipeAndIngredients" className="d-flex justify-content-between">
            <div className="recipe">
              <h4 className="text-center">{this.props.name}</h4>
              {this.props.recipe.map((ingredient, i) => {
                return(
                  <Ingredients class={this.state.class} key={i} i={i} ingredient={ingredient}/>
                )
              })}
            </div>        
            <div className="d-flex flex-wrap" style={{width: 400, height:470}}>
              <div className="ml-5 mr-3 gameIngredient">
                  <img
                    className="images"
                    onClick={() => this.props.add("a drop of dragon blood", "drip")} 
                    src={dragon} alt="dragon blood" style={{width: 150, height: 150}}/>
              </div>
              <div className="mx-3 gameIngredient">
                  <img 
                    className="images"
                    onClick={() => this.props.add("a lacewing fly", "crinkle")} 
                    src={lacewing} alt="lacewing fly" style={{width: 150, height: 150}}/>
              </div>
              <div className="ml-5 mr-3  gameIngredient">
                  <img 
                    className="images"
                    onClick={() => this.props.add("powdered bicorn horn", "dust")} 
                    src={bicorn} alt="bicorn horn" style={{width: 150, height: 150}}/>
              </div>
              <div className="mx-3 gameIngredient">
                  <img 
                    className="images"
                    onClick={() => this.props.add("beetle eyes", "seeds")} 
                    src={beetle} alt="beetle" style={{width: 150, height: 150}}/>
              </div>
              <div className="ml-5 mr-3  gameIngredient">
                  <img
                    className="images" 
                    onClick={() => this.props.add("an eye of newt", "drop")}
                    src={newt} alt="newt" style={{width: 150, height: 150}}/>
              </div>
              <div className="mx-3 gameIngredient">
                  <img 
                    className="images"
                    onClick={() => this.props.add("boomslang skin", "sizzle")}
                    src={boomslang} alt="boomslang" style={{width: 150, height: 150}}/>
              </div>
            </div>
            <img 
                className="images align-self-center"
                onClick={() => this.brew()}
                src={cauldron} alt="cauldron" style={{width: 200, height: 200}}/>
          </div>
          <Audio/>
        </div>
      );
    }
}


/* <div>
<button onClick={() => this.props.add("a lacewing fly", "crinkle")}>lacewing</button>
<button onClick={() => this.props.add("a drop of dragon blood", "drip")}>dragon blood</button>
<button onClick={() => this.props.add("an eye of newt", "drop")}>eye of newt</button>
<button onClick={() => this.props.add("powdered bicorn horn", "dust")}>powdered bicorn horn</button>
<button onClick={() => this.props.add("beetle eyes", "seeds")}>beetle eyes</button>
<button onClick={() => this.props.add("boomslang skin", "sizzle")}>boomslang skin</button>
</div>
          <button onClick={() => this.brew()}>BREW</button> */





let mapStateToProps = (state) => {
  return {
    name: state.name,
    recipe: state.recipe,
    insult: state.insult,
    username: state.username,
    score: state.score,
    userPotion: state.userPotion,
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    add: (ingredient, currentSound) => dispatch({type: "ADD", ingredient: ingredient, currentSound: currentSound}),
    correct: () => dispatch({type: "CORRECT"}),
    newGame: () => dispatch({type: "NEW_GAME"}),
    new: (potion) => dispatch({type: "NEW", potion: potion, currentSound: "bubbling"}),
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Game);
