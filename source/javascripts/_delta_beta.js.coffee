$ ->
    d3.csv "data/delta_beta_carbon.csv", (error, data) ->
        if error?
            console.warn error
            return
        placeholder = "#delta-beta-carbon"
        width = 0.6 * $(placeholder).width()
        factor = document.documentElement.clientHeight / document.documentElement.clientWidth
        height = width * factor
        cross_section = new d3.chart.Line()
        cross_section
            .y_scale(d3.scale.log()
            .domain [1e-13, 1e-4]
            )
        legend = new d3.chart.LineLegend()
        legend
            .color_scale cross_section.color_scale()
            .width width
            .height height
        axes = new d3.chart.Axes()
            .x_title "energy (keV)"
            .y_title "carbon"
        axes.x_scale cross_section.x_scale()
        axes.y_scale cross_section.y_scale()
        cross_section
            .color_scale(d3.scale.ordinal()
            .domain data.map (d) -> d.name
            .range ["#b2df8a", "#33a02c", "#a6cee3", "#1f78b4"]
            )
        cross_section
            .interpolation "basis"
            .height height
            .width width
            .margin {top: width * 0.05, right: height * 0.1, bottom: height * 0.2, left: width * 0.1}
        cross_section
            .x_scale()
            .domain [10, 160]
        #axes
            #.y_axis()
            #.ticks(3)
        #axes
            #.x_axis()
            #.ticks(3)

        legend
            .color_scale cross_section.color_scale()

        data = [{
            name: "delta"
            values: data.map (d) ->
                x: d.energy
                y: d.delta
        },
        {
            name: "beta"
            values: data.map (d) ->
                x: d.energy
                y: d.beta
        }]

        d3.select placeholder
            .data [data]
            .call cross_section.draw

        d3.select placeholder
            .select "svg"
            .select "g"
            .data [1]
            .call axes.draw
            .call legend.draw
