import React from 'react';

import classes from './IngredientController.css';

const ingredientController = (props) => (
    <div className={classes.IngredientController}>
        <p>{props.name}</p>
        <button>-</button>
        <button onClick={props.added}>+</button>
    </div>
);

export default ingredientController;