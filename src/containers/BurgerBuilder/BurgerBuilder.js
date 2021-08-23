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

const BurgerBuilder=()=> {
    const [ingredients,setIngredients]=useState([
        // {type:"salad",number:1},
        // {type:"bacon",number:1},
    ]);
    const [INGREDIENT_PRICES,setINGREDIENT_PRICES]=useState(
        [
            {type:"salad",price: 5},
            {type:"cheese",price: 4},
            {type: "meat",price:2},
            {type: "bacon",price: 3}
        ]);
    const [totalPrice,setTotalPrice]=useState(4);
    const [purchasable,setPurchasable]=useState(false);
    const [purchasing,setPurchasing]=useState(false);
    const [loading,setLoading]=useState(false);
    let history = useHistory();
    useEffect(() => {
       fetch(`https://react-my-burger-7b5c9-default-rtdb.firebaseio.com/ingredients`)
            .then(data => console.log(data))
            .catch(error => console.error('Unable to get items.', error));

    })

    const addIngredientHandler = (type) => {
        let obj=null;
        function findIngredient(type) {
            return ingredients.filter(item => {
                return item.type === type
            })
        }
        function findPrice(type) {
            return INGREDIENT_PRICES.filter(item => {
                return item.type === type
            })
        }
        obj=findIngredient(type);
        let priceIngredient=findPrice(type);
        let id=(Math.floor(Math.random()*50));
        setIngredients([...ingredients,{type:type,number:1}]);
        let Price=totalPrice+priceIngredient[0].price;
        setTotalPrice(Price);
        checkOrderHandler();
    }


    const moveIngredientHandler = (type) => {
        let obj=null;
        function b(type) {
            return ingredients.filter(item => {
                return item.type === type
            })
        };
        obj=b(type);
        if(obj.length>0 )
        {
            let index=-1;
            for(let i=0;i<ingredients.length;i++){
                if(ingredients[i].type===type)
                {
                    index=i;
                    break;
                }
            }

            let temp=ingredients;
            temp.splice(index,1)
            setIngredients(temp);
            function findPrice(type) {
                return INGREDIENT_PRICES.filter(item => {
                    return item.type === type
                })
            }
            let priceIngredient=findPrice(type);
            let Price=totalPrice-priceIngredient[0].price;
            if(Price<=4){
                Price=4;
            }
            setTotalPrice(Price);

        }
        else
        {
            return;
        }

        checkOrderHandler( );
    }


    const checkOrderHandler=()=>{
        if(totalPrice>4){
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
         history.push('/checkOut', {ingredients,totalPrice});
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
    if(ingredients){
        burger=(
            <Auxx>
                <Burger ingredients={ingredients} />
                <BuildControls
                    addIngredient={addIngredientHandler}
                    moveIngredient={moveIngredientHandler}
                    disabled={disableInfo}
                    totalPrice={totalPrice}
                    purchasable={totalPrice>4}
                    ordered={orderedHandler}
                />
            </Auxx>
        );
        orderSummary=  <OrderSummery
            ingredients={ingredients}
            modalClosed={purchaseCancelHandler}
            purchaseContinued={purchaseContinued}
            totalPrice={totalPrice}
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
export default withRouter(BurgerBuilder);