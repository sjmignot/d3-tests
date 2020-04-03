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
var h = 100;

dataset = [...Array(100)].map((_, i) => [w*Math.random(), h*Math.random()])

console.log(dataset)

const render = (dataset) => {
    var svg = d3.select('div')
        .append('svg')
        .attr('width', w)
        .attr('height', h);
    
    var points = svg.selectAll('circle')
        .data(dataset)
        .enter()
        .append('circle')
            .attr('cx', (d) => d[0])
            .attr('cy', (d) => d[1])
            .attr('r', 5)
}

render(dataset)
