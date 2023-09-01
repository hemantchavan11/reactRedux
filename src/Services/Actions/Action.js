import { ADD_TO_CART } from "../Constant";
import { REMOVE_FROM_CART } from "../Constant";

export const addToCart =(data)=>{
    console.log("Action Data : " , data);
    return {
        type: ADD_TO_CART,
        data : data
    }
}

export const removeFromCart=()=>{
    //console.log("Action Data : " , data);
    return {
        type: REMOVE_FROM_CART
    }
}