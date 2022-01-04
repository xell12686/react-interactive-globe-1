import React, { Component } from "react";
import { render } from "react-dom";
import Map from "./Map";

import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0, 0],
      isToggleOn: true,
      isActive: 0
    };
  }

  handlerClick = id => {
    this.setState({ isActive: id });
    console.log(this.state.isActive);
  };

  changeCenter = center => id => {
    this.setState({ center });
  };

  render() {
    const isActive = this.state;
    let div1 = isActive === 1 ? "div1 active" : "div1";
    let div2 = isActive === 2 ? "div2 active" : "div2";
    return (
      <div style={{ textAlign: "center" }}>
        <div style={{ padding: "1rem 0" }}>
          <button
            id="1"
            className="btn"
            onClick={this.changeCenter([15.1, 35.4])}
          >
            {"Vienn"}
          </button>
          <button
            id="2"
            className="btn"
            onClick={this.changeCenter([-83.1, 35.4])}
          >
            {"Tallahasi"}
          </button>
          <button className="btn" onClick={this.changeCenter([13.1, -25.4])}>
            {"Capetown"}
          </button>
        </div>
        <button id="1" onClick={() => this.handlerClick(1)}>
          color1
        </button>
        <button id="2" onClick={() => this.handlerClick(2)}>
          color2
        </button>

        <div className={div1}>COLOR1</div>
        <div className={div2}>COLOR1</div>
        <Map center={this.state.center} isActive={this.state.isActive} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
