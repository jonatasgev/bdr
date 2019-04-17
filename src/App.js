import React, { Component } from "react";
import "./App.css";

// SECTIONS
import {
  Section1,
  Section2,
  Section3,
  Section4,
  Section5
} from "./sections/Sections";

// COMPONENTS
import Footer from "./components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Footer />
      </div>
    );
  }
}

export default App;
