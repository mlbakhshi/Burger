import React from 'react';
import classes from './SideDrawer.module.css';
import Logo from "../../Logo/logo";
import NavigationItems from "../Navigationitems/navigationitems";
import Backdrop from "../../UI/Backdrop/backdrop";
import Auxx from "../../../hoc/Auxx/Auxx";
const SideDrawer=(props)=>{
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }

    return (
        <Auxx>
            <Backdrop show={props.open} clicked={props.closed} />
            <div className={attachedClasses.join(' ')}>
                <div className={classes.Logo}>
                    <Logo />
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxx>
    );
}
export default SideDrawer;