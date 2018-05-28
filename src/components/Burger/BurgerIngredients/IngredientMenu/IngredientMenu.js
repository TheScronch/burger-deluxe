import React from 'react';
import IngredientController from './IngredientController/IngredientController';

import classes from './IngredientMenu.css';

const ingredientControllers = [
    { name: 'Lettuce', type: 'lettuce' },
    { name: 'Tomato', type: 'tomato' },
    { name: 'Bacon', type: 'bacon' },
    { name: 'Cheese', type: 'cheese' },
    { name: 'Patty', type: 'patty' }
];

const ingredientMenu = (props) => (
    <div className={classes.IngredientMenu}>
        {ingredientControllers.map( (ingredentCtrl, index) =>(
            <IngredientController 
                name={ingredentCtrl.name} 
                key={ingredentCtrl.name} 
                added={() => props.addAmount(ingredentCtrl.type)} 
                removed={() => props.removeAmount(ingredentCtrl.type)} 
                disabled={props.disabled[index]}/>
        ))}
    </div>
);

export default ingredientMenu;