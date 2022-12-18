import React from "react";
import './style.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="left">
                <div>
                <h3 className="webname">E-Commerce</h3>
                </div>
                <div>
                    <a>
                        Product
                    </a>
                </div>
                <div className="addproduct">
                    <p>Add Product</p>
                    <a href="https://google.com" target="blank"><img className="incimg" src="https://banner2.cleanpng.com/20180730/bbc/kisspng-computer-icons-icon-design-clip-art-green-tick-with-transparent-background-5b5ebc9c20f0d2.9304821615329353241349.jpg"/></a>
                </div>

            </div>
            <div className="right">
                <h5 className="name" ><a href="https://github.com/MathurJi0309" target="blank">Mathur_Ji</a></h5>
                <img src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"/>

            </div>
        </div>
    )
}


export default Navbar;