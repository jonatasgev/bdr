import React, { Component } from "react";
import Collapse, { Panel } from "rc-collapse";
import "./Section4.css";
import arrow from "./../../assets/img/arrow-down.png";
import img from "./../../assets/img/img1.jpg";

class Section4 extends Component {
  getItems() {
    const items = [];
    for (let i = 0; i < 5; i++) {
      items.push(
        <Panel header="Lorem ipsum" key={i + 1}>
          <div className="content">
            <div className="img" style={{ backgroundImage: `url(${img})` }} />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.
            </p>
          </div>
        </Panel>
      );
    }
    return items;
  }

  expandIcon({ isActive }) {
    return (
      <img
        src={arrow}
        alt=""
        className={isActive ? "arrow expanded" : "arrow"}
      />
    );
  }

  render() {
    return (
      <div className="section4">
        <Collapse accordion={true} expandIcon={this.expandIcon}>
          {this.getItems()}
        </Collapse>
      </div>
    );
  }
}

export default Section4;
