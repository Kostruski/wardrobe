import React from 'react';
import { HashRouter as Router,NavLink } from "react-router-dom";



const toggleUnderline = e => {
  const boxes = document.querySelectorAll("a>span");
  boxes.forEach(el => el.classList.remove("underlined"));
  e.target.firstElementChild.classList.add("underlined");
};
 
export default function Navigation(props) {
    return (
        <Router>
            <div className="nav">
                <NavLink exact to="/" onClick={(e) => {toggleUnderline(e)}}>main page<span ></span></NavLink>            
                {props.colors.length>0 || props.keywords>0 ? <NavLink to="/lookoftheday" onClick={(e) => {toggleUnderline(e);}}>look of the day<span></span></NavLink> : null}
                <NavLink to="/mywardrobe" onClick={(e) => {toggleUnderline(e)}}>my wardrobe<span></span></NavLink>
                <NavLink to="/addelement" onClick={(e) => {toggleUnderline(e)}}>add element<span></span></NavLink>
            </div>
         </Router>
    )
}
