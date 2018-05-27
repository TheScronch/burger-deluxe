import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
import classes from './Burger.css';

const burger = (props) => {
    const ingredientsArr = [];

    props.ingredients.forEach(element => {
        for ( let i = 0; i < element.amount; i++ ) {
            ingredientsArr.push(<BurgerIngredient key={ element.name + i } type = { element.name } />);
        }
    });

    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bun-top"/>
            {ingredientsArr}
            <BurgerIngredient type="bun-bottom"/>
        </div>
    );
};

export default burger;