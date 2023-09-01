import React from "react";

function Header(props){
    console.log("Header Data : ",props)
    return(
        <div>
            <nav>
                <div className="navLeft">
                    <img className="Amazon-Logo" src="https://www.citypng.com/public/uploads/preview/-11596409153ixy8eolhxq.png" alt="logo"/>
                </div>
                <div className="navRight">
                    <span className="cart-count">{props.data.length}</span>
                    <img className="Cart-Logo" src="https://www.freeiconspng.com/thumbs/cart-icon/cart-icon-10.png" alt="cart"/>
                </div>
            </nav>
        </div>
    )
}

export default Header;