var dataset;

const margin = {
    'top': 20,
    'bottom': 20, 
    'left': 20,
    'right': 20
}

var parseTime = d3.timeParse("%m/%d/%y");

d3.csv('/static/data/time-data.csv', (d) => ({
            date: parseTime(d.Date), 
            amount: +d.Amount 
        })
    
    ).then((data) => {
        dataset = data
        console.log(dataset)
        render(dataset)
   }
);

const render = (dataset) => {
    var w = 500
    var h = 500

    var xScale = d3.scaleTime().domain([
            d3.min(dataset, (d) => d.date),
            d3.max(dataset, (d) => d.date)
        ])
        .range([margin.left, w - margin.right])
        .nice()

    var yScale = d3.scaleTime().domain([0, 
            d3.max(dataset, (d) => d.amount)
        ])
        .range([h-margin.top, margin.bottom])
        .nice()

    var xAxis = d3.axisBottom().scale(xScale);

    var yAxis = d3.axisLeft().scale(yScale);

    var svg = d3.select('div')
        .append('svg')
            .attr('height', h)
            .attr('width', w)

    svg.selectAll('rect')
        .data(dataset)
        .enter()
        .append('rect')
            .attr('x', (d, i) => xScale(d.date))
            .attr('y', (d) => h - margin.top - yScale(d.amount))
            .attr('width', (w-margin.left-margin.right)/dataset.length)
            .attr('height', (d) => yScale(d.amount))
    svg.append('g')        
        .attr("class", "axis")
        .attr("transform", "translate(0," + (h - margin.bottom) + ")")
        .call(xAxis)
    svg.append('g')
        .attr("class", "axis")
        .attr("transform", "translate(" + margin.left + ",0)")
        .call(yAxis)
}
