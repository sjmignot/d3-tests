var dataset;

var w = 500;
var h = 100;
var barPadding = 5;

dataset = [...Array(25)].map((_, i) => h*Math.random())

console.log(dataset)

const render = (dataset) => {
    var svg = d3.select('div')
        .append('svg')
        .attr('width', w)
        .attr('height', h);
    
    var points = svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
            .attr('x', (d, i) => i * (w / dataset.length) + barPadding)
            .attr('height', (d, i) => d)
            .attr('width', w/dataset.length - 2*barPadding)
}

render(dataset)
