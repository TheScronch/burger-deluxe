import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientMenu from '../../components/Burger/BurgerIngredients/IngredientMenu/IngredientMenu';

import classes from './BurgerBuilder.css';

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
                amount: 0 
            },
            { 
                name: 'tomato',
                amount: 0 
            },
            { 
                name: 'bacon',
                amount: 0
            },
            { 
                name: 'cheese',
                amount: 0 
            },
            { 
                name: 'patty',
                amount: 0
            }
        ],
        totalCost: 3
    }

    modifyAmount = (type, value) => {
        const tempCost = this.state.totalCost;
        let tempIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            if ( tempIngredients[i].name === type && tempIngredients[i].amount <= 0 )
            {
                tempIngredients[i].amount += value;
                const newCost = tempCost + (ingredientCosts[type] * value);
                this.setState( {totalCost: newCost, ingredients: tempIngredients} );
            }
        }
    }

    removeAmount = (type) => {
        const tempCost = this.state.totalCost;
        let tempIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            if ( tempIngredients[i].name === type && tempIngredients[i].amount !== 0 )
            {
                tempIngredients[i].amount -= 1;
                const newCost = tempCost - ingredientCosts[type];
                this.setState( {totalCost: newCost, ingredients: tempIngredients} );
            }
        }
    }

    addAmount = (type) => {
        const tempCost = this.state.totalCost;
        let tempIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            if ( tempIngredients[i].name === type && tempIngredients[i].amount < 3 )
            {
                tempIngredients[i].amount += 1;
                const newCost = tempCost + ingredientCosts[type];
                this.setState( {totalCost: newCost, ingredients: tempIngredients} );
            }
        }
    }

    render () {
        const disabledRemove = JSON.parse(JSON.stringify(this.state.ingredients));
        for ( let i = 0; i < Object.keys(disabledRemove).length; i++ ) {
            disabledRemove[i] = disabledRemove[i].amount <= 0
        }
        console.log(disabledRemove);
        return (
            
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <IngredientMenu 
                    addAmount={this.addAmount} 
                    removeAmount={this.removeAmount} 
                    disabled={disabledRemove} />
                    <p className={classes.Price}>Total cost: ${this.state.totalCost.toFixed(2)}</p>
            </Fragment>
        );
    }
}

export default BurgerBuilder;