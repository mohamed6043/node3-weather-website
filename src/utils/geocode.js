const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoibXVzdGFmYTEyMzQiLCJhIjoiY2t1ZHR5bHdnMDY0ODJ3cWthd2dmMGVicSJ9.yO6aV0P5K70GT4cEsa9ghw&limit=1'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Cannot connect to mapbox')
        } else if (body.features.length === 0) {
            callback('Cannot find location')
        } else {

            callback(undefined, {
                lat: body.features[0].center[1],
                long: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode 