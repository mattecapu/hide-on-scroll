# hide-on-scroll

Simple script to hide a navigation bar on scroll down and reveal it on scroll up

## Install

Install the module from [`npm`](https://www.npmjs.com/package/hide-on-scroll)
```
npm i hide-on-scroll --save
```

## Usage
I suggest to bundle the module with [browserify](https://www.npmjs.com/package/browserify)
```
browserify your-main-javascript-file.js > bundle.js
```
So that in `your-main-javascript-file.js` you can just `require()` or `import` it.

```js
/*! your-main-javascript-file.js */
import hideOnScroll from 'hide-on-scroll';
// or
var hideOnScroll = require('hide-on-scroll');
```

To actually make it work, you have two options

1. Just call the default exported function

	```js
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

	```js
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

```js
hideOnScroll({
	// (string) a CSS, Sizzle-parsable selector to grab your navbar
	navbarSelector: '.nav',
	// (string) a CSS class that is applied when hiding the navbar
	// OR (boolean) "false" to use inline styles to hide it
	hidingClass: 'hidden',
	// (integer, default: 200) milliseconds between scrolling status checks
	pollingInterval: 200
});
```

## How it works
Code is pretty easy and self-documenting.
Anyway the code is heavily based on [this article](https://medium.com/@mariusc23/hide-header-on-scroll-down-show-on-scroll-up-67bbaae9a78c#.ek4orlkou) by [Marius Craciunoiu](https://github.com/mariusc23).

## Issues?
Open an issue here on GitHub and notify [me on Twitter](https://twitter.com/mattecapu)

## License

MIT
