import show from "./style/icons/show.png";
import hide from "./style/icons/hide.png";
import React, { Component } from "react";
import Slider from "react-slick";

const images = require.context("../public/itemsImg", true);

export default class MyWardrobe extends Component {
  state = {
    wardrobe: this.props.wardrobe,
    removed: this.props.removed
  };

  componentDidUpdate(prev) {
    if (this.props !== prev) {
      this.setState({
        wardrobe: this.props.wardrobe,
        removed: this.props.removed
      });
    }
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true
    };

    const arr = this.state.wardrobe;
    const hiddenArr = this.state.removed;

   
    const items = arr.map(el => (
      <div key={el.id}>
        <img src={images(`${el.src}`)} />
        <img
          onClick={() => {
            this.props.remove(el.id);
          }}
          className="hide"
          src={hide}
        />
      </div>
    ));

    const hiddenItems = hiddenArr.map(el => (
      <div key={el.id}>
        <img src={images(`${el.src}`)} />
        <img
          onClick={() => {
            this.props.unremove(el.id);
          }}
          className="hide"
          src={show}
        />
      </div>
    ));

    const hiddenSlider =
      this.props.removed.length > 0 ? (
        <div className="allItemsSlider">
          <div className="slideBox">
            <Slider {...settings}>{hiddenItems}</Slider>
          </div>
        </div>
      ) : null;

    return (
      <div className="myWardrobe">
        <div className="allItemsSlider ">
          <div className="slideBox">
            <Slider {...settings}>{items}</Slider>
          </div>
        </div>
        {hiddenSlider}
      </div>
    );
  }
}
