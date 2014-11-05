$ ->
    thickness_table = (raw_table, energy, min_tr_05, min_tr_20) ->
        table = raw_table.map (element) ->
            array = element.table.split(/\s+/).map(parseFloat)
            rows = []
            while array.length > 0
                rows.push array.splice 0, 3
            rows.map (d) ->
                {
                    name: element.name
                    energy: d[0] * 1e3
                    mu: d[1] * element.density
                }
        rows_with_energy = table.map (element) ->
            (element.filter (d) -> d.energy == energy)[0]
        rows_with_energy.map (d) ->
            [
                d.name
                (-Math.log(min_tr_05) / d.mu).toFixed(2)
                (-Math.log(min_tr_20) / d.mu).toFixed(2)
            ]


    v = 0.1
    n = 10000
    sigma_max = 2 * Math.PI / 5

    minimum_transmission_05 = window.bisect(
        (a) -> window.sigma_P(a, v, n, 0.5) < sigma_max,
        0.01,
        0.99)
    minimum_transmission_20 = window.bisect(
        (a) -> window.sigma_P(a, v, n, 2) < sigma_max,
        0.11,
        0.99)
    
    table = ->
        header = ["material", "r = 0.5", "r = 2.0"]
        chart = (selection) ->
            selection.each (data) ->
                console.log data
                tab = d3.select this
                    .selectAll "table"
                    .data [data]

                t_enter = tab.enter()
                    .append "table"
                    .classed "table", true

                t_enter.append "thead"
                t_enter.append "tbody"

                thead = tab.select "thead"
                    .selectAll "tr"
                    .data [header]

                thead.enter()
                    .append "tr"
                    .selectAll "th"
                    .data (d) -> d
                    .enter()
                    .append "th"
                    .text (d) -> d

                thead.exit().remove()

                tbody = tab.select "tbody"
                    .selectAll "tr"                                                                     
                    .data data

                tbody.enter()
                    .append "tr"
                    .selectAll "td"
                    .data (d) -> d
                    .enter()
                    .append "td"
                    .text (d) -> d

                tbody.exit().remove()

                                
        return chart

    d3.json "data/nist.data.json", (error, json) ->
        if error?
            console.warn error
            return
        table30 = thickness_table(
            json,
            30,
            minimum_transmission_05,
            minimum_transmission_20
        )

        table100 = thickness_table(
            json,
            100,
            minimum_transmission_05,
            minimum_transmission_20
        )

        d3.select "#table-30"
            .data [table30]
            .call table()

        d3.select "#table-100"
            .data [table100]
            .call table()