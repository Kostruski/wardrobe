import React, { Component } from "react";
import SlidersPage from "./slidersPage";
import Header from "./header";
import Navigation from "./navigation";
import AddElement from "./addElement";
import MyWardrobe from "./myWardrobe";
import StartPageMain from "./startPageMain";
import {myWardrobe} from "./wardrobeObj.js";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";



export default class StartPage extends Component {
                 state = {
                   headerVisible: true,
                   wardrobe: myWardrobe.myItems,
                   toBeDisplayed: 0,
                   keywords: ["casual"],
                   colors: ["blue"],
                   removed: []
                 };

                 remove = id => {
                   const tempArr = this.state.wardrobe;

                   const visibleItems = tempArr.filter(
                     obj => obj.id !== id
                   );

                   const hiddenItem = tempArr.filter(
                     obj => obj.id === id
                   );

                   
                   this.setState({ wardrobe: visibleItems });
                   this.setState(prev => ({
                     removed: [ ...hiddenItem, ...prev.removed,]
                   }));
                 };

                 unremove = id => {
                   const tempArr = this.state.removed;

                   const hiddenItems = tempArr.filter(
                     obj => obj.id !== id
                   );

                   const hiddenItem = tempArr.filter(
                     obj => obj.id === id
                   );

                   console.log(hiddenItem);

                   this.setState({ removed: hiddenItems });
                   this.setState(prev => ({
                     wardrobe: [
                      ...hiddenItem,
                       ...prev.wardrobe
                      
                     ]
                   }));
                 };

                 render() {
                   const props = {
                     wardrobe: this.state.wardrobe,
                     keywords: this.state.keywords,
                     colors: this.state.colors,
                     remove: this.remove,
                     removed: this.state.removed,
                     unremove: this.unremove
                   };

                   const NotFound = () => (
                     <h1>404 page not found</h1>
                   );

                   return (
                     <div className="startPage">
                       <Header />
                       <Navigation
                         navigate={this.navigate}
                         toBeDisplayed={this.toBeDisplayed}
                       />
                       <Router>
                         <>
                           <Switch>
                             <Route
                               exact
                               path="/"
                               component={() => (
                                 <StartPageMain {...props} />
                               )}
                             />
                             <Route
                               path="/lookoftheday"
                               render={() => (
                                 <SlidersPage {...props} />
                               )}
                             />
                             <Route
                               path="/mywardrobe"
                               component={() => (
                                 <MyWardrobe {...props} />
                               )}
                             />
                             <Route
                               path="/addelement"
                               component={() => (
                                 <AddElement {...props} />
                               )}
                             />
                             <Route component={NotFound} />
                           </Switch>
                         </>
                       </Router>
                     </div>
                   );
                 }
               }
