import React from 'react';

let Ingredients = (props) => {

    if(props.i === 0) {
        return (<p className={"ingredient"+props.class+(props.i+1)} style={{fontSize: "1.2em"}}>First add {props.ingredient}</p>)
      } else {
        return (<p className={"ingredient"+props.class+(props.i+1)} style={{fontSize: "1.2em"}}>Then add {props.ingredient}</p>)
      }
}

export default Ingredients;