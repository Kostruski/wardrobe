import React from 'react';
import {myWardrobe} from "./wardrobeObj.js";
import SimpleSlider from './simpleSlider.js'


class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            wardrobe: myWardrobe,
            firstTop: [],
            secondTop: [],
            dress: [],
            bottom: [],
            shoes: [],
            accessories: []
         }
    }

    componentDidMount() {
        const items = this.state.wardrobe.myItems
        items.forEach(el => this.setState((prev) => ({[el.type] : [...prev[el.type], el]})))
       
    }



    render() { 
        console.log(this.state.firstTop)
        if(this.state.dress.length>0) {
            return ( 
               <div className="slidersWrap">
                 <SimpleSlider items={this.state.dress} />
                 <SimpleSlider items={this.state.firstTop} />
               </div>
            );
        }
        else {
            return(
                null
            )
         
        }
          
        
    }
}
 
export default StartPage;