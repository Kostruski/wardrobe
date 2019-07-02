import React from 'react';
import {myWardrobe} from "./wardrobeObj.js";
import SingleItem from './singleItem.js'


class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            wardrobe: {}
         }
    }

    componentDidMount(){
        this.setState({
            wardrobe : myWardrobe
        })        
    }



    render() { 

       
    //   console.log(this.state.wardrobe.myItems)

       
        return ( 
            <div>
              <SingleItem items={this.state.wardrobe.myItems}/>
            </div>
         );
    }
}
 
export default StartPage;