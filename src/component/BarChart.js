import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  //Called immediately after the Spirograph component mounted. Rerendering of the component then occurs.
  componentDidMount() {
    d3.selectAll("rect").remove(); //Need to remove the previous render of the component.
    return this.drawBarChart();
  }

  drawBarChart() {
    
  //Declare the chart dimensions and margins.
  const data = this.props.data;
  const width = this.props.width;
  const height = this.props.height;
  const marginTop = 30;
  const marginRight = 0;
  const marginBottom = 30;
  const marginLeft = 40;

  //Create the SVG container.
  const svg = d3.select("#root").append("svg")
      .attr("width", width)
      .attr("height", height)
      .attr("viewBox", [0, 0, width, height]);

  svg.selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", (d, i) => height - 10 * d)
      .attr("width", 65)
      .attr("height", (d, i) => d * 10)
      .attr("fill", "purple");
  }

  render() {

    return (
      <div>
        <section className = "section is-medium">
          <div id={"barChart" + this.props.id}></div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </section>
      </div>  
    );
  }

}

export default BarChart;
