const http = require('http');
const https = require('https');
const {parse} = require('node-html-parser');

module.exports = (url, callback) => {
    const req = (url.includes('https://') ? https : http).get(url, (response) => {
        let body = '';
        response
            .on('data', chunk => body += chunk)
            .on('end', () => {
                if (response.statusCode === 200) {
                    try {
                        const document = parse(body);
                        callback(null, document);
                    } catch (err) {
                        callback(err);
                    }
                } else {
                    callback(new Error(response.statusCode));
                }
            })
            .on('error', callback);
    });
};
