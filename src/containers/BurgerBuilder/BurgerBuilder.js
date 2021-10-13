import React, { useEffect ,useState,Component} from 'react';
import Burger from "../../components/Burger/Burger";
import Aux from '../../hoc/Auxx/Auxx';
import BuildControls from './../../components/Burger/BuildControls/BuildControls'
import classes from "../../components/Burger/Burger.module.css";
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import Modal from "../../components/UI/Modal/modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";
import axios from './../../axios-orders';
import Snipper from "../../components/UI/snipper/snipper";
import withErrorHandler from './../../hoc/withErrorHandler/withErrorHandler';
import Auxx from "../../hoc/Auxx/Auxx";
import {withRouter,useHistory,Redirect} from "react-router-dom";
import {connect} from "react-redux";
import * as actionType from './../../store/actions';
import mapDispatchToProps from "react-redux/lib/connect/mapDispatchToProps";
import mapStateToProps from "react-redux/lib/connect/mapStateToProps";

const BurgerBuilder=()=> {
    // const [ingredients,setIngredients]=useState([
        // {type:"salad",number:1},
        // {type:"bacon",number:1},
    // ]);
    // const [INGREDIENT_PRICES,setINGREDIENT_PRICES]=useState(
    //     [
    //         {type:"salad",price: 5},
    //         {type:"cheese",price: 4},
    //         {type: "meat",price:2},
    //         {type: "bacon",price: 3}
    //     ]);
    // const [totalPrice,setTotalPrice]=useState(4);
    const [purchasable,setPurchasable]=useState(false);
    const [purchasing,setPurchasing]=useState(false);
    const [loading,setLoading]=useState(false);
    let history = useHistory();



    useEffect(() => {
       // fetch(`https://react-my-burger-7b5c9-default-rtdb.firebaseio.com/ingredients`)
       //      .then(data => console.log(data))
       //      .catch(error => console.error('Unable to get items.', error));

    })


    const mapStateToProps=state=> {
        return {
            ings: state.ingredients,
            price: state.totalPrice
        };
    }
    const mapDispatchToProps=dispatch=>{
        return {
            onIngredientAdded: (ingName) => dispatch({type: actionType.addIngredientHandler, ingredientName: ingName}),
            onIngredientRemoved: (ingName) => dispatch({type: actionType.moveIngredientHandler, ingredientName: ingName})
        }
    }





    const checkOrderHandler=()=>{
        if(props.price>4){
            setPurchasable(true);
        }
        else
        {
            setPurchasable(false);
        }

    }

    const purchaseCancelHandler=()=>{
        setPurchasing(false);
    }
    const purchaseContinued=(props)=>{
        setLoading(true);
        const url = new URL(window.location.href);
        // for(let i in ingredients){
        //     url.searchParams.append(ingredients[i].type, ingredients[i].number);
        // }
        //
         history.push('/checkOut', {ings,price});
    }

    const orderedHandler=()=>{
        setPurchasing(true);
    }
    const disableInfo=[...ingredients];
    for(let key in disableInfo ) {
        disableInfo[key] = disableInfo[key].number <= 0;
    }
    let orderSummary=null;
    if(loading===true)
    {
        orderSummary =<Snipper />
    }
    let burger=<Snipper />
    if(props.ingredients){
        burger=(
            <Auxx>
                <Burger ingredients={props.ingredients} />
                <BuildControls
                    addIngredient={props.onIngredientAdded}
                    moveIngredient={props.onIngredientRemoved}
                    disabled={disableInfo}
                    totalPrice={props.price}
                    purchasable={props.price>4}
                    ordered={orderedHandler}
                />
            </Auxx>
        );
        orderSummary=  <OrderSummery
            ingredients={props.ingredients}
            modalClosed={purchaseCancelHandler}
            purchaseContinued={purchaseContinued}
            totalPrice={props.price}
        />
    }


    return (

        <Aux>

            <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                {orderSummary }
            </Modal>
            {burger}

        </Aux>
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(withErrorHandler(BurgerBuilder,axios));