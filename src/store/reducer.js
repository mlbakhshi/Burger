import * as actionTypes from './actions';
const initialState={
    ingredients:[
        {type:"salad",number:1},
        {type:"bacon",number:1},
    ],
    INGREDIENT_PRICES:
            [
                {type:"salad",price: 5},
                {type:"cheese",price: 4},
                {type: "meat",price:2},
                {type: "bacon",price: 3}
            ],
    totalPrice:4
}
const reducer=(state=initialState,action)=>{
    switch(action.type){
        case actionTypes.addIngredientHandler:
            return{
                ...state,
                ingredients:
                    {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                    },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName]
            }
        case actionTypes.moveIngredientHandler:
            return{
                ...state,
                ingredients:
                    {
                        ...state.ingredients,
                        [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                    },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.ingredientName]
            }
        default:
            return state

    }

};
export default reducer;