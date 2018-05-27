import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientMenu from '../../components/Burger/BurgerIngredients/IngredientMenu/IngredientMenu';

const ingredientCosts = {
    lettuce: 0.2,
    tomato: 0.2,
    bacon: 1.5,
    cheese: 0.5,
    patty: 2
}

class BurgerBuilder extends Component {
    state = {
        ingredients: [
            { 
                name: 'lettuce',
                amount: 1 
            },
            { 
                name: 'bacon',
                amount: 1 
            },
            { 
                name: 'cheese',
                amount: 1 
            },
            { 
                name: 'patty',
                amount: 2
            }
        ],
        totalCost: 5
    }

    addIngredient = (type) => {
        let currentAmount = type;
        let currentCost = this.state.totalCost;

        console.log( currentAmount );
        currentCost += ingredientCosts[type];
        console.log( currentCost );
    }

    removeIngredient = () => {

    }

    render () {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <IngredientMenu addIngredient={this.addIngredient} />
            </Fragment>
        );
    }
}

export default BurgerBuilder;