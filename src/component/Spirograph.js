import React, {Component} from 'react';
import * as d3 from "d3";

class Spirograph extends Component {
  //Called immediately after the Spirograph component mounted. Rerendering of the component then occurs.
  componentDidMount() {
    d3.selectAll("rect").remove(); //Need to remove the previous render of the component.
    return this.drawChart();
  }

  drawChart() {
    const data = [25, 5, 30, 65, 15, 35];
    const svg = d3.select("body").append("svg").attr("width", 700).attr("height", 300);
    svg.selectAll("rect")
    .data(data)
    .enter()
    .append("rect")
    .attr("x", (d, i) => i * 70)
    .attr("y", (d, i) => 300 - 10 * d)
    .attr("width", 65)
    .attr("height", (d, i) => d * 10)
    .attr("fill", "brown");
  }

  render() {
    return <div id={"#" + this.props.id}></div>
  }

}

export default Spirograph;
