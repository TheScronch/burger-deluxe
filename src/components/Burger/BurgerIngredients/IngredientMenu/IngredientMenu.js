import React from 'react';
import IngredientController from './IngredientController/IngredientController';

import classes from './IngredientMenu.css';

const ingredientControllers = [
    { name: 'Lettuce', type: 'lettuce', cost: 0.2 },
    { name: 'Tomato', type: 'tomato', cost: 0.2 },
    { name: 'Bacon', type: 'bacon', cost: 1.5 },
    { name: 'Cheese', type: 'cheese', cost: 0.5 },
    { name: 'Patty', type: 'patty', cost: 2 }
];

const ingredientMenu = (props) => (
    <div className={classes.IngredientMenu}>
        {ingredientControllers.map( (ingredentCtrl, index) =>(
            <IngredientController 
                name={ingredentCtrl.name} 
                key={ingredentCtrl.name} 
                added={() => props.addAmount(ingredentCtrl.type, ingredentCtrl.cost)} 
                removed={() => props.removeAmount(ingredentCtrl.type, ingredentCtrl.cost)} 
                disableRemove={props.disabledRemove[index]}
                disableAdd={props.disabledAdd[index]}
                cost={ingredentCtrl.cost} />
        ))}
    </div>
);

export default ingredientMenu;