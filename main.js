
console.log("linked");


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

var data = [55000, 48000, 27000, 66000, 90000];

// Add X axis
var x = d3
  .scaleBand()
  .range([0, width])
  .padding(0.1)
  .domain(data.map(function(d, i) { return i; }));

svg
  .append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(d3.axisBottom(x))
  .selectAll("text")
    .style("text-anchor", "end");

// Add Y axis
var y = d3.scaleLinear().domain([0, 100000]).range([height, 0]);
svg.append("g").call(d3.axisLeft(y));

// Add dots
svg.selectAll("mydots")
  .data(data)
  .enter()
  .append("circle")
  .attr("cx", function(d, i) { return x(i); })
  .attr("cy", function(d) { return y(d); })
  .attr("r", 5)
  .style("fill", "red");




