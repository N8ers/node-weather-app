const request = require('request');
const yargs = require('yargs');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true //tells yargs to parce 'a' as a string
        }
    })
    .help()
    .alias('help', 'h')
    .argv; //saves results to argv 

//HOW TO GET ADDRESS AND ENJECT IT INTO API
//This encodes the address
var encodedAddress = encodeURIComponent(argv.address);
//If you look in the request below, under the url you will see a template string with enjected dynamic variable

console.log(argv);

request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
}, (error, response, body) => {
    console.log(`Address: ${body.results[0].formatted_address}`);
    console.log(`Latitude: ${body.results[0].geometry.location.lat}`);
    console.log(`Longitude: ${body.results[0].geometry.location.lng}`);
});

//don't know how to encode something, terminal <node>
//<encodeURIComponent('what you want to encode')>
//it gives you -> 'what%20you%20want%20to%20encode'
//you can do the reverse with <decodeURIComponent('what%20you%20want%20to%20encode')