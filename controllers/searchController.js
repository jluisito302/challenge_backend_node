const { response, request } = require('express');
const cities = require('../resource/cities-canada-usa.json');

const citiesGet = (req = request, res) => {
    const { q, latitude = 'No latitud', longitude = 'No longitude' } = req.query;
    let search = search_city(cities, q);
    res.json({
        search
    });
}

function search_city(source, name) {
    let results

    name = name.toUpperCase();
    results = source.filter(function(entry) {
        return entry.name.toUpperCase().indexOf(name) !== -1;
    });
    return results;
}


module.exports = {
    citiesGet,
}