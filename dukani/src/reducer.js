import { useStateValue } from "./StateProvider";

export const initialState = {
    cart:[],
    user:null,
}

export const getTotal = (cart) => cart?.reduce((amount, item) => item.price + amount, 0)

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            }
        case 'ADD_TO_CART':
            //logic for adding to cart
            return { 
                ...state,
                cart: [...state.cart, action.item],
             }            
            
        case 'REMOVE_FROM_CART':
            //logic for removing from cart

            //clone the basket
            let newCart = [...state.cart] 

            const index = state.cart.findIndex((cartItem) => cartItem.id === action.id)

            if (index >= 0) {
                //item exists in basket, remove it
                newCart.splice(index, 1);
            }
            return { 
                ...state,
                cart : newCart
            }    
        default:
            return state;
    }
}

export default reducer;