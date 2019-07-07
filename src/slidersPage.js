import React from "react";
import DressSlider from "./dressSlider.js";
import FirstTopSlider from "./firstTopSlider.js";

class SlidersPage extends React.Component {
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
    const items = this.state.wardrobe;
    items.forEach(el =>
      this.setState(prev => ({ [el.type]: [...prev[el.type], el] })) 
    );
  }

  render() {
    
    
    if (this.state.dress.length > 0) {
      return (
        <div className="slidersWrap">
          <DressSlider
            items={this.state.dress}
            colors={this.props.colors}
            keywords={this.props.keywords}
            remove={this.props.remove}
          />
          <FirstTopSlider
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

export default SlidersPage;
