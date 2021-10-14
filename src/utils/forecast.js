const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=3610df91f64ea6ef5776949f84978d84&query=' + latitude + ',' + longitude + '&units=f'
    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!')
        } else if (body.error) {
            callback('Unable to find location')
        } else {
            callback(undefined,
                body.current.weather_descriptions[0]
                + '. It is currently '
                + body.current.temperature
                + ' out. it feels like '
                + body.current.feelslike)
        }
    })

}

module.exports = forecast

