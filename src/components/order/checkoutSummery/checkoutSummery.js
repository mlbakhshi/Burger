import React from "react";
import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";
import classes from './checkoutSummery.module.css';
const CheckoutSummery=(props)=>{

return(
    <div className={classes.CheckoutSummary}>
        <h1>We hope it tastes well!</h1>
        <div style={{ width: '100%',  margin: 'auto' }}>
            <Burger ingredients={props.ingredients} />
        </div>
        <Button btnType="Success" clicked >Continue </Button>
        <Button btnType="Danger" clicked >Cancel </Button>

    </div>
    )
}
export default CheckoutSummery;