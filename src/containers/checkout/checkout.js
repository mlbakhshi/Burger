import React,{Component,useState,useEffect} from 'react';
import CheckoutSummery from './../../components/order/checkoutSummery/checkoutSummery';
// import {BrowserRouter, Route} from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ContactData from "./ContactData/ContactData"
import Auxx from "../../hoc/Auxx/Auxx";
const Checkout =(props)=>{
   const [initialIngredients,setInitialIngredients]=useState([]);
   const [totalPrice,setTotalPrice]=useState(0);

   // setTotalPrice(props.location.state.totalPrice);

   useEffect(()=>{
       setInitialIngredients(...[props.location.state]);
    },[initialIngredients]);

  const  checkoutCancelledHandler = () => {
        this.props.history.goBack();
    }

    const checkoutContinuedHandler = () => {
        this.props.history.replace('checkout/contact-data');
    }
        return(
            <Auxx>

                <CheckoutSummery
                    ingredients={initialIngredients}
                    checkoutCancelled={checkoutCancelledHandler}
                    checkoutContinued={checkoutContinuedHandler}
                />
                    <ContactData ingredients={initialIngredients} totalPrice={totalPrice} {...props} />
            </Auxx>
        );
}
export default Checkout;