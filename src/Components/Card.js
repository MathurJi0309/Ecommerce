import React from "react";


const Card =(props)=>{
    return(
        <div className="Card">
            <div className="imgDiv">
                <img src={props.img}/>
            </div>
            <span>
                {props.title}
            </span>
            <span>
                {props.brand}
            </span>
            <span>
                {props.price}
            </span>
            <span>
                {props.dis}
            </span>


        </div>
    )
}

export default Card;