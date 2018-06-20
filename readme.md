![](blinds.gif)
# DOMGet

What you got here is a simplified request maker that translates your request's response into dang ol' parsed html. I was using `jsdom` but realized it's pretty heavy on the dependency front. So in the process of breaking up my server into modules I thought I'd make my own simpler parser.

This isn't meant to replace JSDOM for other folks. Just for funhouse.

## Install
`npm i @dillonchr/domget`

## Usage
Handles http and https. It will break if you feed it a 301 url that redirects http to https. But anyway usage is simple.

```js
const domget = require('@dillonchr/domget');
domget('https://docs.npmjs.com/getting-started/scoped-packages', (err, dom) => console.log(err || dom.querySelector('h1').text));
```
