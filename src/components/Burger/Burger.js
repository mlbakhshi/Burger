import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';
import { withRouter } from 'react-router-dom';
const Burger=(props)=>{
    let result=3;
    let ingredientsInfo=null;
    let ingredients = props.ingredients.ingredients;
    if(props.ingredients.totalPrice){
        ingredientsInfo =
            props.ingredients.ingredients.map(ingredient =>
                <BurgerIngredient
                    key={ingredient.id}
                    type={ingredient.type}
                    number={ingredient.number}
                />);
    }
    else
    {
        ingredientsInfo =
            props.ingredients.map(ingredient =>
                <BurgerIngredient
                    key={ingredient.id}
                    type={ingredient.type}
                    number={ingredient.number}
                />);
    }

    if(result===0){
        return(
            <p>
                <div className={classes.Burger}>
                    <BurgerIngredient type="bread-top" />
                    Fill your Burger...
                    <BurgerIngredient type="bread-bottom" />
                </div>
            </p>
        )
    }
    else {
        return(
            <div className={classes.Burger}>
                <BurgerIngredient type="bread-top" />
                {ingredientsInfo}
                <BurgerIngredient type="bread-bottom" />
            </div>

        )
    }

};
export default withRouter(Burger);