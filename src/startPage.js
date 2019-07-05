import React from 'react';
import {myWardrobe} from "./wardrobeObj.js";
import SimpleSlider from './simpleSlider.js'


class StartPage extends React.Component {
    constructor() {
        super();
        this.state = {
            wardrobe: myWardrobe
         }
    }



    render() { 

       
          
        return ( 
            <div>
              <SimpleSlider items={this.state.wardrobe} />
            </div>
         );
    }
}
 
export default StartPage;