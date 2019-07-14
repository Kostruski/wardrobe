
import ColorsCheckBox from "./colorsCheckBox.js";
import KeyWordsRadio from "./keyWordsRadio.js";
import place from './style/icons/place.jpg'
import loading from './style/icons/loading.gif'
import React, { Component } from "react";

const season = ["cold","chilly","warm","hot"];
const timeOfDay = ["work", "afterhours" ];
const style = ["elegant", "casual" , "sport"];
const pattern = [ "pattern", "plain", "print"]
const colors = ["white", "black" , "gray" , "green" , "brown" , "blue" , "red" , "pink" , "orange" , "navy" , "violet" , "yellow"]

export default class AddElement extends Component {

    state = {
        loading: false,
        uploaded: false
    }

    upload = (e) => {
       e.preventDefault()
        this.setState({loading: true})
        setTimeout(()=> {
            this.setState({loading: false, uploaded: true}) 
        }, 2000)
    }

    componentWillUnmount() {
        this.setState({uploaded: false})
    }


    render() {

        const text = this.state.uploaded ? `Congratulations, You just added a new item to your virtual wardrobe` :`Upload images of your clothes to create virtual wardobe`
        const imgSrc = this.state.loading ? loading : place
        return (
            <div className="addElement">
                <div className="startPageMain">
                  <div className='addImage'>
                    <img className="startCover" src={imgSrc}/>
                    <h4>{text}</h4>
                  </div>


                  <form id="keyWordsForm" >
                  <div className="formText">Choose your outfit</div>
                    <h1>Temperature</h1>
                    <div className="radiosRow">
                      {season.map(el => (
                        <KeyWordsRadio name="temperature" text={el} />
                      ))}
                    </div>
                    <h1>Time of day</h1>
                    <div className="radiosRow">
                      {timeOfDay.map(el => (
                        <KeyWordsRadio name="timeofday" text={el} />
                      ))}
                    </div>
                    <h1>Style</h1>
                    <div className="radiosRow">
                      {style.map(el => (
                        <KeyWordsRadio name="style" text={el} />
                      ))}
                    </div>
                    <h1>Pattern</h1>
                    <div className="radiosRow">
                      {pattern.map(el => (
                        <KeyWordsRadio name="pattern" text={el} />
                      ))}
                    </div>
                    <div className="colorsBox">
                    {colors.map(el => (
                      <ColorsCheckBox color={el} />
                    ))}
                    </div>
                    <input type="submit" id="submitForm" value="Submit" onClick={this.upload} />
                  </form>

                </div>










            </div>
        )

    }

    
}
