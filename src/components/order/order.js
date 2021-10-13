import React from 'react';
import classes from './order.module.css';
const Order=(props)=>{
    console.log(props.ingredients.totalPrice);
    const orderList=[];
    for(let key in props.ingredients){
        orderList.push({
            ...props.ingredients[key],
            id:key
        });
    }
    let initialIngredients=[];
    for(let key in orderList[0]){
        initialIngredients.push({
            ...orderList[0][key],
            id:key
        });
    }
    console.log(initialIngredients);
    const ingredientOutput = initialIngredients.map(ig => {
        return <span
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px'
            }}
            key={ig.type}>{ig.type} </span>
    })
    console.log(ingredientOutput);
    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Price: <strong> {props.ingredients.totalPrice} USD </strong></p>
        </div>
    )
}
export default Order;