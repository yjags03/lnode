//console.log('Hello world');

var fs = require('fs');

fs.readFile('some_file.txt', function (error, data) {
    if (error) throw error;
    console.log(data.toString());
});