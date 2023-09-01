import { ADD_TO_CART } from "../Constant";
import { REMOVE_FROM_CART } from "../Constant";
// const initialState = {
//     cart: []
// }

export default function cartItems(state=[],action){
    console.log("Reducer Data: ",action);
    switch(action.type){
        case ADD_TO_CART : {
            return [...state,{cart: action.data}]
        }

        case REMOVE_FROM_CART : {
            state.pop()
            return [...state]
        }

        default : {
            return state
        }
    }
}