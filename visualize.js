  var data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  var numberScale = d3.scaleLinear()
      .domain([1, 10])
      .range([1, 10]);

  var round = function(value) {
      var log = d3.scaleLog()(value)
      return d3.format(".2f")(log)
  }

  var appendRow = function(scale, title) {
      var row = d3.select('table tbody').append('tr');
      row.append('td').text(title);

      row.selectAll('td')
          .data(data, function(d) {
              return d;
          })
          .enter()
          .append('td')
          .text(function(d) {
              return scale(d);
          })
  }


  var loadChart = function() {
      var table = d3.select('.container').append('table')
              // .style("border-collapse", "collapse")// <= Add this line in
              .style("border", "2px steelblue solid"); // <= Add this line in;
      table.append('tbody');

      appendRow(numberScale, 'title');
      appendRow(numberScale, 'N');
      appendRow(d3.scalePow().exponent(2), 'Square');
      appendRow(d3.scaleLog(), 'Log');
      appendRow(round,'h')


      // createRows(data, ['n'],tbody)
      // createRows(d3.scalePow().exponent(2),['c'],tbody)
      // createRows('log'),['kk'],tbody)
      // createRows(square(data),['square'],tbody);
      // createRows(dataAsArray(data,log),['log'],tbody)
      // createRows(dataAsArray(dataAsArray(data,log),round),['round'],tbody)
  }
  window.onload = loadChart;
