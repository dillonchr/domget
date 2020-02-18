![](blinds.gif)
# DOMGet

What you got here is a simplified request maker that translates your request's response into dang ol' parsed html. I was using `jsdom` but realized it's pretty heavy on the dependency front. So in the process of breaking up my server into modules I thought I'd make my own simpler parser.

This isn't meant to replace JSDOM for other folks. Just for funhouse.

## Install
`npm i @dillonchr/domget`

## Usage
Handles http and https. It will break if you feed it a 301 url that redirects http to https. But anyway usage is simple. It uses @dillonchr/fetch to load HTML and then uses [cheerio](https://github.com/cheeriojs/cheerio#selectors) to parse it to be queryable. Check out Cheerio's readme for usage. It's jquery style.

```js
const domget = require('@dillonchr/domget');
domget('https://docs.npmjs.com/getting-started/scoped-packages', (err, $) => {
    if (err) {
        console.error('No dice', err);
    } else {
        console.log('npmjs says:', $('h1').text());
    }
});
```
