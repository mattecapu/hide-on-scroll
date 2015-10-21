# hide-on-scroll

Simple script to hide a navigation bar on scroll down and reveal it on scroll up

## Get it

Install the module from `npm`
```
npm i hide-on-scroll --save
```

## Use it
I suggest to bundle the module with browserify
```
browserify your-main-javascript-file.js > bundle.js
```
So that in `your-main-javascript-file.js` you can just `require()` or `import` it.
```
/*! your-main-javascript-file.js */
import hideOnScroll from 'hide-on-scroll';
// or
var hideOnScroll = require('hide-on-scroll');
```
To actually make it work, you have two options

1. Just call the default exported function
```
import hideOnScroll from 'hide-on-scroll';
// or
var hideOnScroll = require('hide-on-scroll');

hideOnScroll({
	navbarSelector: '.nav',
	hidingClass: 'hidden'
});
```
This will execute the code on DOMContentLoaded (wrapped by jQuery's `$(document).ready()`)
2. Execute the code when you need it
```
import {hideOnScroll} from 'hide-on-scroll';
// or
var hideOnScroll = require('hide-on-scroll').hideOnScroll;

function doSomething() {
	// ...
	hideOnScroll({
		navbarSelector: '.nav',
		hidingClass: 'hidden'
	});
	// ...
}
```

## Options
```
hideOnScroll({
	navbarSelector: '.nav', // (string) a CSS, Sizzle-parsable selector to grab your navbar
	hidingClass: 'hidden'   // (string) a CSS class that is applied when hiding the navbar
							// OR (boolean) "false" to use inline styles to hide it
	pollingInterval: 200    // (integer, default: 200) milliseconds between scrolling status checks
});
```

## How it works
Code is pretty easy and self-documenting.
Anyway the code is heavily based on [this article](https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.ek4orlkou) by Marius Craciunoiu.

## License

MIT
