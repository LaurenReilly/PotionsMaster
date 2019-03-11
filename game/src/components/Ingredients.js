import React from 'react';

let Ingredients = (props) => {

    if(props.i === 0) {
        return (<p className={"ingredient"+props.class+(props.i+1)}>First add {props.ingredient}</p>)
      } else {
        return (<p className={"ingredient"+props.class+(props.i+1)}>Then add {props.ingredient}</p>)
      }
}

export default Ingredients;