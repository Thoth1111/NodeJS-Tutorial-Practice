var fs = require('fs');

fs.open('mynewfile2.txt', 'w', function (err, file) {
    if(err) throw err;
    console.log('Saved!');
});

//This method takes a flag as a second argument. If the flag is 'w', the file is opened for writing. If the file does not exist, an empty file is created.