$ ->
    json = window.aggregated
    placeholder = "#ratio-df-all"
    width = 0.6 * document.documentElement.clientWidth
    factor = document.documentElement.clientHeight / document.documentElement.clientWidth
    height = width * factor
    json = json
        .map (d) ->
            {
                name: d.name.toLowerCase()
                values: d.values
            }
    json = json
        .filter (d) ->
            d.name isnt "coffee" and d.name isnt "rice flour"
        .concat json.filter (d) ->
            d.name is "coffee" or d.name is "rice flour"
    scatter = d3.chart.scatter()
        .width width
        .height height
        .x_value (d) -> d[1]
        .y_value (d) -> d[2]
        .x_title "dark field"
        .y_title "log dark field / log transmission"
        .legend_square_size height / 14
        .margin {
            top: 0.1 * height
            right: 0.02 * width
            bottom: 0.12 * height
            left: 0.08 * width
        }
    scatter
        .y_scale()
        .domain [0, 5]
    scatter
        .y_axis()
        .ticks 4
    scatter
        .x_axis()
        .ticks 4
    d3.select placeholder
        .data [json]
        .call scatter
