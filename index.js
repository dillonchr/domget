const fetch = require('@dillonchr/fetch');
const {parse} = require('node-html-parser');

module.exports = (urlOrOpts, callback) => {
    const opts = typeof urlOrOpts === 'string' ?
        {url: urlOrOpts} :
        urlOrOpts;
    fetch(opts, (err, body) => {
        if (err) {
            return callback(err);
        }
        try {
            const dom = parse(body);
            callback(null, dom);
        } catch(parseError) {
            callback(parseError);
        }
    });
};
