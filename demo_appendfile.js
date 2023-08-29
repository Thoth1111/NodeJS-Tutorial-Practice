var fs = require('fs');

fs.appendFile('my newFile1.txt', 'First line!', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//when run in the terminal, this will create a new file called my newFile1.txt if the file does not already exist. Otherwise, it will append the text 'First line!' to the end of the file.