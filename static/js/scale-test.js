var dataset;

var w = 500;
var h = 100;

const margin = {
    'top': 20,
    'bottom': 20,
    'right': 20,
    'left': 20,
}

dataset = [...Array(100)].map(() => [Math.random(), Math.random()])


var xScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d)=>d[0]), d3.max(dataset, (d)=>d[0])])
    .range([margin.left, w-margin.right]);

var yScale = d3.scaleLinear()
    .domain([d3.min(dataset, (d)=>d[1]), d3.max(dataset, (d)=>d[1])])
    .range([margin.bottom, h-margin.top]);


const render = (dataset) => {
    var svg = d3.select('div')
        .append('svg')
        .attr('width', w)
        .attr('height', h)

    svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
            .attr('cx', (d) => xScale(d[0]))
            .attr('cy', (d) => yScale(d[1]))
            .attr('r', 5);
}

render(dataset)
