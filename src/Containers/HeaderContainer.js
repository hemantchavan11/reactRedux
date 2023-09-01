import { connect } from "react-redux";
import Header from "../Components/Header";

const mapStateToProps = state=>({
    data: state.cartItems1
})

const mapDispatchToProps = dispatched =>({
   
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);