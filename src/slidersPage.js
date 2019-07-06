import React from "react";

import DressSlider from "./dressSlider.js";
import FirstTopSlider from "./firstTopSlider.js";

class StartPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      wardrobe: this.props.wardrobe,
      firstTop: [],
      secondTop: [],
      dress: [],
      bottom: [],
      shoes: [],
      accessories: []
    };
  }

  componentDidMount() {
    const items = this.state.wardrobe.myItems;
    items.forEach(el =>
      this.setState(prev => ({ [el.type]: [...prev[el.type], el] })) //rozsypuje szafę po odpowiednich półkach
    );
  }

  render() {
    
    if (this.state.dress.length > 0) {
      return (
        <div className="slidersWrap">
          <DressSlider
            key={0}
            items={this.state.dress}
            colors={this.props.colors}
            keywords={this.props.keywords}
          />
          <FirstTopSlider
            key={1}
            items={this.state.firstTop}
            colors={this.props.colors}
            keywords={this.props.keywords}
          />
        </div>
      );
    } else {
      return null;
    }
  }
}

export default StartPage;
