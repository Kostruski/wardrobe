import React from 'react'
import ColorsCheckBox from "./colorsCheckBox.js";
import KeyWordsRadio from "./keyWordsRadio.js";
import fig from './style/icons/fig.jpg'

const season = ["cold","chilly","warm","hot"];
const timeOfDay = ["work", "afterhours" , "weekend"];
const style = ["elegant", "casual" , "sport"];
const pattern = [ "pattern", "plain", "print"]
const colors = ["white", "black" , "gray" , "green" , "brown" , "blue" , "red" , "pink" , "orange" , "navy" , "violet" , "yellow"]

export default function StartPageMain(props) {
    return (
      <div className="startPageMain">
        <div className='startMainImg'>
          <img className="startCover" src={fig}/>
        </div>

        
        <form id="keyWordsForm" onSubmit={props.submitKeyWords}>
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
          <input type="submit" id="submitForm" value="Submit" />
        </form>

      </div>
    );

}


