import React, { useEffect ,useState} from 'react';
import Burger from "../../components/Burger/Burger";
import Aux from '../../hoc/Auxx';
import BuildControls from './../../components/Burger/BuildControls/BuildControls'
import classes from "../../components/Burger/Burger.module.css";
import BurgerIngredient from "../../components/Burger/BurgerIngredient/BurgerIngredient";
import Modal from "../../components/UI/Modal/modal";
import OrderSummery from "../../components/Burger/OrderSummery/OrderSummery";

const BurgerBuilder=()=> {
    const [ingredients,setIngredients]=useState([ ]);
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
        console.log(INGREDIENT_PRICES[0].price)
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
        console.log(obj);
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

            setIngredients(ingredients.splice(index,1));
            // setIngredients(ingredients);
            console.log(ingredients)
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

        console.log(purchasable)
    }

    const purchaseCancelHandler=()=>{
        setPurchasing(false);
    }

    const purchaseContinued=()=>{
        alert("continue")
    }

    const orderedHandler=()=>{
        setPurchasing(true);
    }
    const disableInfo=[...ingredients];
    for(let key in disableInfo ) {
        disableInfo[key] = disableInfo[key].number <= 0;
        // console.log(disableInfo);
    }
    return (
        <Aux>
            <div className={classes.Burger}>
                <Modal show={purchasing} modalClosed={purchaseCancelHandler}>
                    <OrderSummery
                        ingredients={ingredients}
                        modalClosed={purchaseCancelHandler}
                        purchaseContinued={purchaseContinued}
                        totalPrice={totalPrice}
                    />
                </Modal>
                <BurgerIngredient type="bread-top" />
                <Burger ingredients={ingredients}/>
                <BurgerIngredient type="bread-bottom" />
            </div>

            <div>

                <BuildControls
                    addIngredient={addIngredientHandler}
                    moveIngredient={moveIngredientHandler}
                    disabled={disableInfo}
                    totalPrice={totalPrice}
                    purchasable={purchasable}
                    ordered={orderedHandler}
                />
            </div>
        </Aux>
    );
}
export default React.memo(BurgerBuilder);