import { connect } from "react-redux";
import Home from "../Components/Home";
import { addToCart } from "../Services/Actions/Action";
import {removeFromCart} from "../Services/Actions/Action";

const mapStateToProps = state => ({
    // data: state.cartItems
})

const mapDispatchToProps = dispatch=>({
    addToCartHandler : data =>dispatch(addToCart(data)),
    removeFromCartHandler : data => dispatch(removeFromCart())
})



export default connect(mapStateToProps,mapDispatchToProps)(Home)