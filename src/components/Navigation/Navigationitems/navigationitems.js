import React from 'react';
import classes from './navigationitems.module.css';
import NavigationItem from "./Navigationitem/navigationitem";
const NavigationItems=(props)=>{
    return(
        <ul className={classes.NavigationItems}>
            <NavigationItem link="/" exact> Burger Builder </NavigationItem>
            <NavigationItem link="/Orders" > Orders </NavigationItem>
        </ul>
    )
}
export default NavigationItems
