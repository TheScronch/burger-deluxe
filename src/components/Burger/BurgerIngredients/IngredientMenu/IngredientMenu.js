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
        {ingredientControllers.map( ingredentCtrl =>(
            <IngredientController 
                name={ingredentCtrl.name} 
                key={ingredentCtrl.name} 
                added={() => props.addIngredient(ingredentCtrl.type)} />
        ))}
    </div>
);

export default ingredientMenu;