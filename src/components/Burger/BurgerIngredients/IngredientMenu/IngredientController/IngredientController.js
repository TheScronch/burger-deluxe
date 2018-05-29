import React from 'react';

import classes from './IngredientController.css';

const ingredientController = (props) => (
    <div className={classes.IngredientController}>
        <label>{props.name} (+${props.cost.toFixed(2)})</label>
        <button 
            className={classes.Remove} 
            onClick={props.removed}
            disabled={props.disableRemove}>-</button>
        <button 
            className={classes.Add} 
            onClick={props.added}
            disabled={props.disableAdd}>+</button>
    </div>
);

export default ingredientController;