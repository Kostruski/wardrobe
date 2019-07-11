import React from 'react'
import close from './style/icons/close.png'
import zara from "./style/icons/zara.png"
import desigual from "./style/icons/desigual.png"
import guess from "./style/icons/guess.png"
import zalando from "./style/icons/zalando.png"

export default function GoShopping(props) {

    let logo; 

    switch (props.type) {
        case "dress":
            logo=zara;

            break;

        case "firstTop":
            logo=desigual;

            break;
        case "secondTop":
            logo=guess;

            break;
        
        case "shoes":
        logo=guess;

        break;
        default:
            logo=zalando




    }





    return (
        <div className="dummy">
            <img className="hide dummyHide" src={close} onClick={props.hideMissingItem} />
            <h1>Go shopping</h1>
            <img className="fromStore"/>
            <img className="logo"/>
            <div></div>          
        </div>
    )
}
