console.log("linked")

// Set the dimensions and margins of the graph
var margin = { top: 20, right: 30, bottom: 50, left: 50 },
  width = 400 - margin.left - margin.right,
  height = 400 - margin.top - margin.bottom;

// Append the svg object to the body of the page
var svg = d3
  .select("#chart")
  .append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
  .append("g")
  .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Parse the Data
var data = [55000, 48000, 27000, 66000, 90000];

// X axis
var x = d3.scaleBand().range([0, width]).padding(0.1);
x.domain([""]);

svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x));

// Add Y axis
var y = d3.scaleLinear().domain([0, 100000]).range([height, 0]);
svg.append("g").call(d3.axisLeft(y));

// Bars
svg
  .selectAll("mybar")
  .data(data)
  .enter()
  .append("rect")
  .attr("x", function (d) {
    return x("");
  })
  .attr("y", function (d) {
    return y(d);
  })
  .attr("width", x.bandwidth())
  .attr("height", function (d) {
    return height - y(d);
  })
  .attr("fill", "#69b3a2");