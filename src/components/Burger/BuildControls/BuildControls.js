import React from "react";
import classes from './BuildControls.module.css';
import BuildControl from "./Buildcontrol/BuildControl";
const BuildControls=(props)=>{
    const controls = [
        { label : 'Salad', type: 'salad'},
        { label : 'Bacon', type: 'bacon'},
        { label : 'Cheese', type: 'cheese'},
        { label : 'Meat', type: 'meat'},
    ];
    return(
        <div className={classes.BuildControls}>
            <p>
                <strong>
                    Current Price :{props.totalPrice}
                </strong>
            </p>
            {
                controls.map(ctrl=>(
                    <BuildControl
                        key={ctrl.label}
                        label={ctrl.label}
                        added={() => props.addIngredient(ctrl.type)}
                        moved={() => props.moveIngredient(ctrl.type)}
                        disabled={props.disabled[ctrl.type]}

                    />
                    )
                )
            }

<button className={classes.OrderButton}  disabled={!props.purchasable} onClick={props.ordered}>
    ORDER NOW
</button>
        </div>
    )
};
export default BuildControls;
