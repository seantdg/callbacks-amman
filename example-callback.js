var request = require('request');
var rp = require('request-promise-native');

console.log("This example uses a callback");

request('https://httpbin.org/get', function (error, response, body) {
	console.log("HTTP Bin Body: " + body);
	console.log("This happens second, even though the code comes first");
});

console.log("This happens first");

