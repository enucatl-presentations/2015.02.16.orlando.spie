$ ->
    factor = 0.618
    width = $("#visibility-plot").width()
    height = factor * width
    plot = new d3.chart.Bar()
        .width width
        .height height
        .margin
            left: 0.10 * width
            top: 0
            bottom: 0.15 * height
            right: 0.05 * width
        .x_value (d) -> d.energy
        .y_value (d) -> d.visibility
    axes = new d3.chart.Axes()
        .x_title "energy (keV)"
    axes.x_scale plot.x_scale()
    axes.y_scale plot.y_scale()

    maximum_visibility = (spectrum_file, design_energy, m) ->
        d3.csv spectrum_file,
            (d) ->
                energy: parseFloat(d.energy)
                photons: parseFloat(d.photons)
            (error, data) ->
                if error?
                    console.warn error
                    return
                total_photons = data.reduce(
                    (total, datum) ->
                        total + datum.photons
                    , 0)
                with_visibility = data.map (d) ->
                    energy: d.energy
                    photons: d.photons
                    visibility: if d.photons then window.polychromatic_visibility(m, design_energy, d.energy) * d.photons / total_photons else 0
                visibility = with_visibility.reduce(
                    (total, datum) ->
                        total + datum.visibility
                    , 0) * 100

                energy_interval = with_visibility[1].energy - with_visibility[0].energy
                plot.x_scale()
                    .domain d3.extent with_visibility, plot.x_value()
                plot.y_scale()
                    .domain d3.extent with_visibility, plot.y_value()

                average_energy = with_visibility.reduce(
                    (total, datum) ->
                        total + datum.visibility * datum.energy
                    , 0) / visibility * 100

                axes.y_title "contribution to visibility / #{energy_interval.toFixed(1)} (keV)"

                d3.select "#visibility-plot"
                    .datum with_visibility
                    .call plot.draw

                axes
                    .y_axis()
                    .tickFormat d3.format ".1%"

                d3.select "#visibility-plot"
                    .select "svg"
                    .select "g"
                    .data [1]
                    .call axes.draw

                $("#max-vis").text "#{visibility.toFixed(1)} %"
                $("#energy-average-visibility").text "#{average_energy.toFixed(1)} (keV)"

    maximum_visibility "data/spectrum160kVp.csv", 120, 1
