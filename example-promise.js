var request = require('request');
var rp = require('request-promise-native');

console.log("This example uses promises");

rp('https://httpbin.org/get')
.then(function (body) {
	console.log("HTTP Bin Body: " + body);
});
