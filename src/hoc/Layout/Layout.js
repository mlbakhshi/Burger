import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from "../../components/Navigation/toolbar/toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Auxx from "../Auxx/Auxx";
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