var dataset;

// d3.csv("/static/data/airline-safety.csv", (error, data) => {
//     if(error) {
//         console.log(error)
//     } else {
//         dataset=data
//         render()
//     }
// });

var w = 500;
var h = 400;

const margin = {
    top: 80,
    right: 30,
    bottom: 30,
    left: 30
}

dataset = [...Array(100)].map((_, i) => [w*Math.random(), h*Math.random()])

// const transition = (svg) => {
//      dataset = [...Array(100)].map((_, i) => [w*Math.random(), h*Math.random()])
//      svg.selectAll('circle')
//          .data(dataset) 
//              .attr("cx", (d) => xScale(d[0]))
//              .attr("cy", (d) => yScale(d[1]))
// }

const render = (dataset) => {
    var svg = d3.select('div')
        .append('svg')
        .attr('width', w)
        .attr('height', h);
    
    var xScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[0])])
        .range([margin.left, w-margin.right])
        .nice()

    var xAxis = d3.axisBottom(xScale)

    var yScale = d3.scaleLinear()
        .domain([0, d3.max(dataset, (d) => d[1])])
        .range([h-margin.bottom, margin.top])
        .nice()

    var yAxis = d3.axisLeft(yScale)

    svg.append("text")
        .attr("x", (w / 2))             
        .attr("y", (margin.top / 2))
        .attr("text-anchor", "middle")  
        .style("font-size", "16px") 
        .style("text-decoration", "underline")  
        .text("Random Animated Scatter");

    svg.append('g')
        .attr("class", "xaxis")
        .attr("transform", `translate(0, ${h-margin.bottom})`)
        .call(xAxis)

    svg.append('g')
        .attr("class", "yaxis")
        .attr("transform", `translate(${margin.left},0)`)
        .call(yAxis)

    var points = svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
            .attr('cx', (d) => xScale(d[0]))
            .attr('cy', (d) => yScale(d[1]))
            .attr('r', 5)

    d3.select('div').append('p')
        .text('click me to change')

    d3.select('p')
        .on('click', () => {
            dataset = [...Array(100)].map((_, i) => [w*Math.random(), h*Math.random()])
            svg.selectAll('circle')
                .data(dataset) 
                .transition()
                .duration(1000)
                    .attr("cx", (d) => xScale(d[0]))
                    .attr("cy", (d) => yScale(d[1]))
        })
}

render(dataset)
