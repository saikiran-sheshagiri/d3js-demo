(function () {
    'use strict';

    var dataset = [];
    for (var i = 0; i < 15; i++) {
        var newNumber = Math.floor(Math.random() * 30);
        dataset.push(newNumber);
    }

    d3
        .select('.div-chart')
        .selectAll('p')
        .data(dataset)
        .enter()
        .append('div')
        .attr('class', 'bar')
        .style('height', function (d) {
            var height = d * 5;
            return height + 'px';
        });

    var svg = d3
        .select('.svg-chart')
        .append('svg')
        .attr('width', 700)
        .attr('height', 300);

    svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", function (d, i) {
            return i * 45;
        })
        .attr("y", function (d) {
            return 300 - d * 5;
        })
        .attr("width", 40)
        .attr("height", function (d) {
            var height = d * 50;
            return height;
        })
        .text(function (d) {
            return d;
        })
        //.attr('fill', '#009900')
        .attr('fill', function (d) {
            return "rgb(0, 0, " + (d * 10) + ")";
        });

    //adding labels
    svg
        .selectAll('text')
        .data(dataset)
        .enter()
        .append('text')
        .text(function (d) {
            return d;
        })
        .attr("x", function (d, i) {
            return (i * 45) + 12;
        })
        .attr("y", function (d) {
            return (300 - d * 5) + 15;
        })
        .attr("font-family", "sans-serif")
        .attr("font-size", "11px")
        .attr("fill", "white");;

})();