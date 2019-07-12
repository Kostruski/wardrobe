import React from "react";
import DressSlider from "./dressSlider.js";
import FirstTopSlider from "./firstTopSlider.js";
import SecondTopSlider from "./secondTopSlider.js";
import BottomSlider from "./bottomSlider.js";
import AcessoriesSlider from "./acessoriesSlider.js";
import ShoesSlider from "./shoesSlider.js";

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
      acessories: [],
      topAndBottom: true,
      colors: this.props.colors,
      keywords: this.props.keywords
    };
  }

  toggleTopAndBottom = () => {
    this.setState(prev => ({ topAndBottom: !prev.topAndBottom }));
  };

  componentDidMount() {
    const items = this.state.wardrobe;
    items.forEach(el =>
      this.setState(prev => ({ [el.type]: [...prev[el.type], el] }))
    );
  }

  componentDidUpdate(prev) {
    if (this.props.wardrobe !== prev.wardrobe) {
      this.setState({
        wardrobe: this.props.wardrobe,
        firstTop: [],
        secondTop: [],
        dress: [],
        bottom: [],
        shoes: [],
        acessories: []
      });
      const items = this.props.wardrobe;
      items.forEach(el =>
        this.setState(prev => ({ [el.type]: [...prev[el.type], el] }))
      );
    }
  }

  render() {
    const text = this.state.topAndBottom
      ? `Click to display look with a dress`
      : `Click to display look with a top and bottom`;

    if (this.state.dress.length > 0 && this.state.topAndBottom === false) {
      return (
        
         
          <div className="slidersWrap">


        
          <div className="topandbottom">
          <div className="topandkeys">
          <div className="togletop" onClick={this.toggleTopAndBottom}>
            <span>{text}</span>
          </div>
          <div className="keywordsBox">
            {[" ", ...this.state.keywords, ...this.state.colors].join(" #")}
          </div>
          </div>

            




            <SecondTopSlider
              items={this.state.secondTop}
              colors={this.props.colors}
              keywords={this.props.keywords}
              toggleRemove={this.props.remove}
            />
            </div>

            <DressSlider
              items={this.state.dress}
              colors={this.props.colors}
              keywords={this.props.keywords}
              toggleRemove={this.props.remove}
            />
            <div className="topandbottom">
              <AcessoriesSlider
                items={this.state.acessories}
                colors={this.props.colors}
                keywords={this.props.keywords}
                toggleRemove={this.props.remove}
              />
              <ShoesSlider
                items={this.state.shoes}
                colors={this.props.colors}
                keywords={this.props.keywords}
                toggleRemove={this.props.remove}
              />
            </div>
          </div>
       
      );
    } else if (this.state.dress.length > 0 && this.state.topAndBottom) {
      return (
        <div className="slidersWrap">
          <div className="topandbottom">
            <div className="topandkeys">
              <div className="togletop" onClick={this.toggleTopAndBottom}>
                <span>{text}</span>
              </div>
              <div className="keywordsBox">
                {[" ", ...this.state.keywords, ...this.state.colors].join(
                  " #"
                )}
              </div>
              </div>

              <SecondTopSlider
                items={this.state.secondTop}
                colors={this.props.colors}
                keywords={this.props.keywords}
                toggleRemove={this.props.remove}
              />
            
          </div>

          <div className="topandbottom" id="topandbottom">
            <FirstTopSlider
              items={this.state.firstTop}
              colors={this.props.colors}
              keywords={this.props.keywords}
              toggleRemove={this.props.remove}
            />

            <BottomSlider
              items={this.state.bottom}
              colors={this.props.colors}
              keywords={this.props.keywords}
              toggleRemove={this.props.remove}
            />
          </div>

          <div id="shoesandbags" className="topandbottom">
              <AcessoriesSlider
                items={this.state.acessories}
                colors={this.props.colors}
                keywords={this.props.keywords}
                toggleRemove={this.props.remove}
              />
              <ShoesSlider
                items={this.state.shoes}
                colors={this.props.colors}
                keywords={this.props.keywords}
                toggleRemove={this.props.remove}
              />
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default SlidersPage;
