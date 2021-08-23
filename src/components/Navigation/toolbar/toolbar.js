import React from 'react';
import classes from './toolbar.module.css';
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigationitems/navigationitems";
import DrawerToggle from "../SideDrawer/drawerToggle/drawerToggle";

const Toolbar =(props)=>{
    return(
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked}/>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <nav className={classes.DesktopOnly}>
                <NavigationItems />
            </nav>
        </header>
    )
}
export default Toolbar;