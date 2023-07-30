import React, {Component} from 'react';
import * as d3 from "d3";

class BarChart extends Component {
  //Called immediately after the Spirograph component mounted. Rerendering of the component then occurs.
  componentDidMount() {
    d3.selectAll("rect").remove(); //Need to remove the previous render of the component.
    return this.drawBarChart();
  }

  //300

  drawBarChart() {
    const data = this.props.data;
    
    //Set a variable with different properties
    let dimensions = {
      width: this.props.width,
      height: this.props.height,
      margins: {
        top: 15,
        right: 30,
        bottom: 0,
        left: 30,
      }
    }

    //Create svg

    const svg = d3.select("#root").append("svg").attr("width", dimensions.width).attr("height", dimensions.height).append("g")
        .style("transform", "translate(" + dimensions.margins.left + "," + dimensions.margins.right + ")");

    //Draw the chart using the svg container:

    svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => dimensions.height - 10 * d)
    .attr("width", dimensions.width)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "purple");
  }

  render() {
    return (
      <div>
        <section className = "section is-medium">
          <div className = "" id={"barChart" + this.props.id}></div>
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
        </section>
      </div>  
    );
  }

}

export default BarChart;
