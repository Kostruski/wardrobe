import React, { Component } from "react";
import SlidersPage from "./slidersPage";
import Header from "./header";
import Navigation from "./navigation";
import AddElement from "./addElement";
import MyWardrobe from "./myWardrobe";
import StartPageMain from "./startPageMain";
import {myWardrobe} from "./wardrobeObj.js";
import {toggleUnderline} from './utilityFunctions.js'



export default class StartPage extends Component {
                 state = {
                   headerVisible: true,
                   wardrobe: myWardrobe.myItems,
                   toBeDisplayed: 0,
                   keywords: ["casual"],
                   colors: ["blue"],
                   removed: []
                 };

                 navigate = (e, num) => {
                   this.setState({ toBeDisplayed: num });
                   toggleUnderline(e);
                 };

                 remove = id => {
                   const tempArr = this.state.wardrobe;

                   tempArr.forEach(el => {
                     if (el.id === id) {
                       el.isVisible = !el.isVisible;
                     }
                   });

                   const visibleItems = tempArr.filter(
                     el => el.isVisible
                   );
                   const hiddenItems = tempArr.filter(
                     el => !el.isVisible
                   );

                   this.setState({ wardrobe: visibleItems });
                   this.setState(prev => ({
                     removed: [...prev.removed, ...hiddenItems]
                   }));
                 };

                 render() {
                   const displayComponets = [
                     <StartPageMain />,
                     <SlidersPage
                       wardrobe={this.state.wardrobe}
                       keywords={this.state.keywords}
                       colors={this.state.colors}
                       remove={this.remove}
                     />,
                     <MyWardrobe />,
                     <AddElement />
                   ];

                   return (
                     <div className="startPage">
                       <Header />
                       <Navigation
                         navigate={this.navigate}
                         toBeDisplayed={this.toBeDisplayed}
                       />
                       {
                         displayComponets[
                           this.state.toBeDisplayed
                         ]
                       }
                     </div>
                   );
                 }
               }
