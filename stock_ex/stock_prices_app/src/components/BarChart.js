import React, { Component } from "react";
import Chart from "chart.js";

class BarChart extends Component {
  componentDidMount() {
    this.getData();
  }

  prepareData = (data) => {
    const chartData = {
      labels: [],
      dataset: [
        {
          label: "AVG Amount",
          data: [],
        },
      ],
    };

    data.prices.forEach((price) => {
      chartData.datasets[0].data.push(price.average_amount);
    });
  };

  createChart = (data) => {
    const ctx = document.querySelector("#price");
    const tempsChart = new Chart(ctx, {
      type: "line",
      data: data,
    });
  };

  getData = () => {
    //   This fuction "fetches" API URL to sent data to page
    fetch("/stocks/1") // grabs show page of stock
      .then((response) => response.json) // gets the response back and displays it in JSON
      .then((jData) => this.prepareData(jData))
      .then((data) => this.createChart(data))
      .catch((err) => console.log(err));
  };

  render() {
    return (
      <>
        <h1>Stock Prices</h1>
        <canvas id="prices" width="300" height="100"></canvas>
      </>
    );
  }
}

export default BarChart;
