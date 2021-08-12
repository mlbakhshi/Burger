import React from 'react';
import classes from './toolbar.module.css';
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigationitems/navigationitems";

const Toolbar =()=>{
    return(
        <header className={classes.Toolbar}>

            <div><Logo /></div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default Toolbar;