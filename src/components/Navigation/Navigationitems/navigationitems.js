import React from 'react';
import classes from './navigationitems.module.css';
import NavigationItem from "./Navigationitem/navigationitem";
const NavigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" active> Burger Builder </NavigationItem>
            <NavigationItem link="/" > Checkout </NavigationItem>
        </ul>
    )
}
export default NavigationItems
