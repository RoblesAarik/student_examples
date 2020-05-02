import React, { Component } from "react";
import BarChart from "./components/BarChart.js";
import "./App.css";
import Chart from "chart.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BarChart />
      </div>
    );
  }
}

export default App;
