import React from 'react'



 
export default function Navigation(props) {
    return (
        <div className="nav">
            <div onClick={(e) => {props.navigate(e,0)}}>main page<span className="underlined" ></span></div>            
            <div onClick={(e) => {props.navigate(e,1)}}>look of the day<span ></span></div>
            <div onClick={(e) => {props.navigate(e,2)}}>my wardrobe<span ></span></div>
            <div onClick={(e) => {props.navigate(e,3)}}>add element<span ></span></div>
         </div>
    )
}
