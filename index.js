const fetch = require('@dillonchr/fetch');
const cheerio = require('cheerio');

module.exports = (urlOrOpts, callback) => {
    const opts = typeof urlOrOpts === 'string' ?
        {url: urlOrOpts} :
        urlOrOpts;
    fetch(opts, (err, body) => {
        if (err) {
            return callback(err);
        }
        try {
            const dom = cheerio.load(body);
            callback(null, dom);
        } catch(parseError) {
            callback(parseError);
        }
    });
};
