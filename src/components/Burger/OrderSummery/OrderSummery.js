import React from 'react'
import Auxx from "../../../hoc/Auxx/Auxx";
import Button from "../../UI/Button/Button";

const OrderSummery=(props)=>{
    const ingredientSummary = props.ingredients.map((d) => <li key={d.type} style={{width:'65%'}}>{d.type}: {d.number}</li>);

    return(
        <Auxx>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>
                Price:{props.totalPrice}
            </p>
            <p>Continue to Checkout?</p>
            <Button btnType='Danger' clicked={props.modalClosed}> Cancel </Button>
            <Button btnType='Success' clicked={props.purchaseContinued}> Continue </Button>
        </Auxx>
    )

}
export default OrderSummery;