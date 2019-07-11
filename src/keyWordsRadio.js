import React from "react";

export default function KeyWordsRadio(props) {
  return (
    <div className="radios">
      <input name={props.name} type="radio" value={props.text} />
      <div class="radioCover">{props.text}</div>
    </div>
  );
}
