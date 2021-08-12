import React from 'react';
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from './Burger.module.css';
const Burger=(props)=>{
let result=Object.keys(props.ingredients).length;
if(result===0){
    return(
        <p>
            Fill your Burger...
        </p>
    )
}
else {
    return(
       Object.keys(props.ingredients).map(id => <BurgerIngredient key={id} type={props.ingredients[id].type} number={props.ingredients[id].number} />)
    )
}

};
export default Burger;