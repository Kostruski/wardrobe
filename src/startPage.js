import React, { Component } from "react";
import SlidersPage from "./slidersPage";
import Header from "./header";
import Navigation from "./navigation";
import AddElement from "./addElement";
import MyWardrobe from "./myWardrobe";
import StartPageMain from "./startPageMain";
import {myWardrobe} from "./wardrobeObj.js";
import {toggleUnderline} from './utilityFunctions.js';
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

                 navigate = (e, num) => {
                   this.setState({ toBeDisplayed: num });
                   toggleUnderline(e);
                 };

                 toggleRemove = id => {
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



                  const props = {
                         wardrobe: this.state.wardrobe,
                         keywords: this.state.keywords,
                         colors: this.state.colors,
                         toggleRemove: this.toggleRemove                    
                  }

                  const NotFound = () => (<h1>404 page not found</h1>)
                  //  const displayComponets = [
                  //    <StartPageMain />,
                  //    <SlidersPage
                  //      wardrobe={this.state.wardrobe}
                  //      keywords={this.state.keywords}
                  //      colors={this.state.colors}
                  //      toggleRemove={this.toggleRemove}
                  //    />,
                  //    <MyWardrobe
                  //     wardrobe={this.state.wardrobe}
                  //     toggleRemove={this.toggleRemove}
                  //     removed={this.state.removed}
                  //     />,
                  //    <AddElement />
                  //  ];

                   return (
                     <div className="startPage">
                       <Header />
                       <Navigation
                         navigate={this.navigate}
                         toBeDisplayed={this.toBeDisplayed}
                       />
                      <Router>
                      <><Switch>
                            <Route exact path="/" component= {() => <StartPageMain {...props} />} />
                            <Route path="/lookoftheday" render={() => <SlidersPage {...props} />} />
                            <Route path="/mywardrobe" component={() => <MyWardrobe {...props} />} />
                            <Route path="/addelement" component={() => <AddElement {...props} />} />                            
                            <Route component={NotFound} />
                          </Switch>
                        </>
                      </Router>
                     </div>
                   );
                 }
               }
