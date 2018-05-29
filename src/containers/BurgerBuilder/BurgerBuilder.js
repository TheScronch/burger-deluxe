import React, { Component, Fragment } from 'react';
import Burger from '../../components/Burger/Burger';
import IngredientMenu from '../../components/Burger/BurgerIngredients/IngredientMenu/IngredientMenu';

import classes from './BurgerBuilder.css';

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
        totalCost: 3,
        purchaseDisabled: true
    }

    updatePurchaseState = (tempIngredients) => {
        let amountTotal = 0;

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            amountTotal += tempIngredients[i].amount;
        }

        this.setState( {purchaseDisabled: amountTotal === 0} );
    }

    removeAmount = (type, value) => {
        const tempCost = this.state.totalCost;
        let tempIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            if ( tempIngredients[i].name === type && tempIngredients[i].amount !== 0 )
            {
                tempIngredients[i].amount -= 1;
                const newCost = tempCost - value;
                this.setState( {totalCost: newCost, ingredients: tempIngredients} );
            }
        }

        this.updatePurchaseState(tempIngredients);
    }

    addAmount = (type, value) => {
        const tempCost = this.state.totalCost;
        let tempIngredients = JSON.parse(JSON.stringify(this.state.ingredients));

        for ( let i = 0; i < Object.keys(tempIngredients).length; i++ ) {
            if ( tempIngredients[i].name === type && tempIngredients[i].amount < 3 )
            {
                tempIngredients[i].amount += 1;
                const newCost = tempCost + value;
                this.setState( {totalCost: newCost, ingredients: tempIngredients} );
            }
        }

        this.updatePurchaseState(tempIngredients);
    }

    render () {
        const disableRemove = JSON.parse(JSON.stringify(this.state.ingredients));
        for ( let i = 0; i < Object.keys(disableRemove).length; i++ ) {
            disableRemove[i] = disableRemove[i].amount <= 0;
        }

        const disableAdd = JSON.parse(JSON.stringify(this.state.ingredients));
        for ( let i = 0; i < Object.keys(disableAdd).length; i++ ) {
            disableAdd[i] = disableAdd[i].amount >= 3;
        }

        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <IngredientMenu 
                    addAmount={this.addAmount} 
                    removeAmount={this.removeAmount} 
                    disabledRemove={disableRemove} 
                    disabledAdd={disableAdd} 
                    ingredientCosts={this.ingredientCosts}/>
                <p className={classes.Price}>Total cost: ${this.state.totalCost.toFixed(2)}</p>
                <button 
                    disabled={this.state.purchaseDisabled}
                    className={classes.Order}>Place Order</button>
            </Fragment>
        );
    }
}

export default BurgerBuilder;