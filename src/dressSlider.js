import React, { Component } from "react";
import Slider from "react-slick";
const images = require.context("../public/itemsImg", true);

export default class DressSlider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideIndex: 0,
      toShow: [],
      count: 0,
      keywords: ['casual'],
      colors: ["black"],
      arr: this.props.items
    };
  }

  componentDidMount() {
    
    const arr = this.state.arr;
    const toShow = [];
    arr.forEach((el, i) => {
      const itemKeyWords = [
        ...el.temperature,
        ...el.timeOfDay,
        ...el.style,
        el.pattern
      ];
      if (
        this.state.keywords.every(item => itemKeyWords.includes(item)) &&
        this.state.colors.includes(el.color)
      )
        toShow.push(i);
    });
    this.setState({ toShow }, () => {
      console.log(this.state.toShow);
    });
  }

  showSelected = () => {
    const arr = this.state.arr;
    const indexOfSlideToShow = this.state.count % this.state.toShow.length;
    this.slider.slickGoTo(this.state.toShow[indexOfSlideToShow]);
    this.setState(prev => ({ count: prev.count + 1 }));
    const indexInNotFilteredArr = this.state.toShow[indexOfSlideToShow]; // numer saljdu dla slidera
    console.log("slider1", this.slider)
  };

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      initialSlide: Math.random()>0.5 ? this.state.toShow[0] : this.state.toShow[this.state.toShow.length-1]
    };

    const arr = this.state.arr;

    const items = arr.map(el => (
      <div key={el.id}>
        <img src={images(`${el.src}`)} />
      </div>
    ));

    return (
      <div className="slideBox">
    
        <Slider ref={slider => (this.slider = slider)} {...settings}>
          {items}
        </Slider>
        <div onClick={this.showSelected}>
            <span>Press to browse selected</span>
            <p>{[" ",...this.state.keywords, ...this.state.colors].join(" #")}</p>
        </div>
      </div>
    );
  }
}

          
               



