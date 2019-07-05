import React, { Component } from 'react'
import Slider from "react-slick";
const images = require.context("../public/itemsImg", true)



     
     
     export default class SimpleSlider extends Component {

        state = {
            imagesArr: []
        }

       componentDidMount() {
       const elegantDress = this.props.items.myItems.filter(el => el.style.includes("elegant"));
           console.log(elegantDress);

      

         this.setState({imagesArr: elegantDress})
       }  

        


         render() {
            const settings = {
               dots: true,
               infinite: true,
               speed: 500,
               slidesToShow: 1,
               slidesToScroll: 1
             };

           
       const elDres = this.state.imagesArr.map(el => {
           const images = images(`${el.src}`);
           return (
               <div key={el.id}>
                 <img src={images} />
               </div>
           )
       })

           

          
               



             return (
                <div>
                    <h2> Single Item</h2>
                    {/* <Slider {...settings}>
                        {this.state.imagesArr}
                    </Slider > */}
                    
                </div>
             )
         }
     }
     


