var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'Updated text', function (err) {
    if (err) throw err;
    console.log('Updated!');
});

//You can also use fs.writeFile to update a file. The difference is that fs.appendFile will add the text at the end of the file, while fs.writeFile will replace the existing file completely.