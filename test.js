const domget = require('./index.js');

domget('https://docs.npmjs.com/getting-started/scoped-packages', (err, $) => {
    if (err) {
        console.error('No dice', err);
    } else {
        console.log('npmjs says:', $('h1').text());
    }
});
