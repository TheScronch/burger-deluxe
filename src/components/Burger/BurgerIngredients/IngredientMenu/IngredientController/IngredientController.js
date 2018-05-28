import React from 'react';

import classes from './IngredientController.css';

const ingredientController = (props) => (
    <div className={classes.IngredientController}>
        <label>{props.name}</label>
        <button 
            className={classes.Remove} 
            onClick={props.removed}
            disabled={props.disabled}>-</button>
        <button 
            className={classes.Add} 
            onClick={props.added}>+</button>
    </div>
);

export default ingredientController;