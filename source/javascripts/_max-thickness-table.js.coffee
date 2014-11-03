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
            {
                name: d.name
                t_05: -Math.log(min_tr_05) / d.mu
                t_20: -Math.log(min_tr_20) / d.mu
            }


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

    energy = 100

    d3.json "data/nist.data.json", (error, json) ->
        if error?
            console.warn error
            return
        table = thickness_table(
            json,
            energy,
            minimum_transmission_05,
            minimum_transmission_20
        )
        console.log table
