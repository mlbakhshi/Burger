import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from "../Navigation/toolbar/toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";
import Auxx from "../../hoc/Auxx";
class Layout extends Component {

    state = {
        showSideDrawer: true
    }
    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }
    drawerToggleClickedHandler=()=>{
        this.setState((prevState)=>{
            return { showSideDrawer: !prevState.showSideDrawer };
        })
    }

    render() {
        return (
            <Auxx>
                <Toolbar drawerToggleClicked={this.drawerToggleClickedHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Auxx>
        );
    }
}

export default Layout;