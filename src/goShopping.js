import React from 'react'
import close from './style/icons/close.png'
import zara from "./style/icons/zara.png"
import desigual from "./style/icons/desigual.png"
import guess from "./style/icons/guess.png"
import zalando from "./style/icons/zalando.png"
import stDummy from "./style/icons/stDummy.jpg"
import dDummy from "./style/icons/dDummy.jpg"
import ftDummy from "./style/icons/ftDummy.jpg"
import sDummy from "./style/icons/sDummy.jpg"
import bDummy from "./style/icons/bDummy.jpg"
import aDummy from "./style/icons/aDummy.jpg"

export default function GoShopping(props) {

    let logo; 
    let shop;
    let text;
    let price;
    let productImg
 

    switch (props.type) {
        case "dress":
            logo=zara;
            price="599 USD"
            text="Zara"
            productImg=dDummy
           
        

            break;

        case "firstTop":
            logo=desigual;
            price="199 USD"
            text="Desigual"
            productImg=ftDummy
           

            break;

        case "secondTop":
            logo=guess;
            text="Guess"
            price="799 USD"
            productImg=stDummy
            



            break;
        
        case "shoes":
        logo=guess;
        text="Guess"
        price="499 USD"
        productImg=sDummy

        break;

        case "acessories":
         text="Zalando"
         logo=zalando
         price="1299 USD"
         productImg=aDummy

        break;

        case "bottom":
         text="Zalando"
         logo=zalando
         price="699 USD"
         productImg=bDummy

        break;

        default:
            logo=zalando
        




    }


    


    return (

        
        <div className="dummy" >
            <img className="hide dummyHide" src={close} onClick={props.hideMissingItem} />
            <img className="fromStore" src={productImg}/>
            <img className="logo" src={logo}/>
            <h5>{price}</h5>
            <a href="#"><span>Continue shopping at {text} on-line</span> </a>
            <div></div>          
        </div>
    )
}
