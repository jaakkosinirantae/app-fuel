/*
Filename: AdvancedDataVisualization.js
Content: Javascript code for advanced data visualization using D3.js library.
*/

// Constants
const SVG_WIDTH = 800;
const SVG_HEIGHT = 400;
const MARGIN = { top: 20, right: 20, bottom: 30, left: 50 };
const CHART_WIDTH = SVG_WIDTH - MARGIN.left - MARGIN.right;
const CHART_HEIGHT = SVG_HEIGHT - MARGIN.top - MARGIN.bottom;

// Create SVG container
const svg = d3.select("body")
  .append("svg")
  .attr("width", SVG_WIDTH)
  .attr("height", SVG_HEIGHT);

// Create chart group
const chartGroup = svg.append("g")
  .attr("transform", `translate(${MARGIN.left}, ${MARGIN.top})`);

// Parse and format data
d3.csv("data.csv").then((data) => {
  data.forEach((d) => {
    d.date = d3.timeParse("%Y-%m-%d")(d.date);
    d.value = +d.value;
  });

  // Create scales
  const xScale = d3.scaleTime()
    .domain(d3.extent(data, (d) => d.date))
    .range([0, CHART_WIDTH]);

  const yScale = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.value)])
    .range([CHART_HEIGHT, 0]);

  // Create axes
  const xAxis = d3.axisBottom(xScale);
  const yAxis = d3.axisLeft(yScale);

  // Add axes to the chart
  chartGroup.append("g")
    .attr("transform", `translate(0, ${CHART_HEIGHT})`)
    .call(xAxis);

  chartGroup.append("g")
    .call(yAxis);

  // Create line generator
  const line = d3.line()
    .x((d) => xScale(d.date))
    .y((d) => yScale(d.value));

  // Add line to the chart
  chartGroup.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 2)
    .attr("d", line);

  // Add data points to the chart
  chartGroup.selectAll(".dot")
    .data(data)
    .enter()
    .append("circle")
    .attr("class", "dot")
    .attr("cx", (d) => xScale(d.date))
    .attr("cy", (d) => yScale(d.value))
    .attr("r", 4)
    .attr("fill", "steelblue");

  // Add tooltip
  const tooltip = d3.select("body")
    .append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

  chartGroup.selectAll(".dot")
    .on("mouseover", (d) => {
      tooltip.transition()
        .duration(200)
        .style("opacity", .9);
      tooltip.html(
          `<strong>Date:</strong> ${d3.timeFormat("%Y-%m-%d")(d.date)}<br/>
          <strong>Value:</strong> ${d.value}`
        )
        .style("left", `${d3.event.pageX}px`)
        .style("top", `${d3.event.pageY}px`);
    })
    .on("mouseout", (d) => {
      tooltip.transition()
        .duration(500)
        .style("opacity", 0);
    });

}).catch((error) => {
  console.error("Error loading data:", error);
});

// Add title
svg.append("text")
  .attr("x", (SVG_WIDTH / 2))
  .attr("y", (MARGIN.top / 2))
  .attr("text-anchor", "middle")
  .style("font-size", "24px")
  .text("Advanced Data Visualization with D3.js");