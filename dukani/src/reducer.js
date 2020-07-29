import { useStateValue } from "./StateProvider";

export const initialState = {
    cart:[],
}

function reducer(state, action) {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_CART':
            //logic for adding to cart
            return { 
                ...state,
                cart: [...state.cart, action.item],
             }            
            break;
        case 'REMOVE_FROM_CART':
            //logic for removing from cart 
            return { 
                state
            }           
            break;
    
        default:
            return state;
    }
}

export default reducer;