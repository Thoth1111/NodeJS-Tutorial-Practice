var fs = require ('fs');

fs.writeFile('mynewfile3.txt', 'Newly reminted', function (err) {
    if (err) throw err;
    console.log('Saved!');
});

//when run, this will replace the contents of mynewfile3.txt with the text 'Newly reminted'. If the file does not exist, it will create it.