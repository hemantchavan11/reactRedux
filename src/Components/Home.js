import React from "react";

function Home(props){
    console.log("Home Data: ",props)
    return(
        <div>

            <div className="Main-container">

                <div className="container">
                    <div className="img-wrapper item">
                        <img src="https://www.freeiconspng.com/thumbs/iphone-x-pictures/apple-iphone-x-pictures-5.png" alt="iphone" />
                    </div>
                    
                    <div className="text-wrapper item">
                        <span>I-Phone</span>
                        <span>Price : $1000.0</span>
                    </div>
                    <div className="btn-wrapper item">
                        <button className="btn-Add" onClick={()=>props.addToCartHandler({Price:'1000',Name:'I-phone-14'})}>Add to Cart</button>
                        <button className="btn-Remove" onClick={()=>props.removeFromCartHandler({Price:'1000',Name:'I-phone-14'})}>Remove from Cart</button>
                    </div>
                </div>

            </div>
        </div>
    )
}
export default Home;