import React, { Component } from "react";
import SlidersPage from "./slidersPage";
import Header from "./header";
import Navigation from "./navigation";
import AddElement from "./addElement";
import MyWardrobe from "./myWardrobe";
import StartPageMain from "./startPageMain";
import {myWardrobe} from "./wardrobeObj.js";


export default class StartPage extends Component {
  state = {
    headerVisible: true,  
    wardrobe: myWardrobe,  
    toBeDisplayed: 0,
    keywords: ['casual'],
    colors: ["blue"],
    removed: [],
 
  };

  navigate = (num) => {
      this.setState({toBeDisplayed: num})
  }

//   remove = (id) => {
//       const toBeRemoved = 
//   }

  render() {

    const displayComponets = [
      <StartPageMain />,
      <SlidersPage
        wardrobe={this.state.wardrobe}
        keywords={this.state.keywords}
        colors={this.state.colors}
      />,
      <MyWardrobe />,
      <AddElement />
    ];

    return (
      <div className="startPage">
        <Header />       
        <Navigation navigate={this.navigate} />
        {displayComponets[this.state.toBeDisplayed]}        
      </div>
    );
  }
}
