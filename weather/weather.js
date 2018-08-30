const request = require('request');

var getWeather = (lat, lng, callback) => {
    request({
        url:`https://api.darksky.net/forecast/e20fe780791cad1d4d4d7b8484f970a5/${lat},${lng}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Unable to connect to Forecast.io server.');
          } else if (response.statusCode === 400) {
            callback('Unable to fetch weather.');
          } else if (response.statusCode === 200) {
            callback(undefined, {
              temperature: body.currently.temperature,
              apparentTemperature: body.currently.apparentTemperature
            });
          }
    });
}

module.exports.getWeather = getWeather;