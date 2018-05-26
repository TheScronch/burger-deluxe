import React from 'react';
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'
import classes from './Burger.css';

const burger = (props) => {
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bun-top"/>
            <BurgerIngredient type="lettuce"/>
            <BurgerIngredient type="tomato"/>
            <BurgerIngredient type="bacon"/>
            <BurgerIngredient type="cheese"/>
            <BurgerIngredient type="patty"/>
            <BurgerIngredient type="bun-bottom"/>
        </div>
    );
};

export default burger;