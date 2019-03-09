import React from 'react';
import { Link } from 'react-router-dom';

let Rules = (props) => {
    return (
        <div>
            <p>this is how u play</p>
            <ul>
                <li>Rules</li>
                <li>ROOLz</li>
                <li>rulz</li>
                <li>rouls</li>
            </ul>
           <Link to="/game"><h2>Lets Brew Some Potions!</h2></Link>
        </div>
    )
}

export default Rules;