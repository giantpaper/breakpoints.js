# breakpoints.js

[![latest release on github](https://badgen.net/github/release/giantpaper/breakpoints.js)](https://github.com/giantpaper/breakpoints.js)
[![v2.0.3 on npm](https://img.shields.io/badge/npm-v2.0.3-red)](https://www.npmjs.com/package/@giantpaper/breakpoints.js)
[![v2.0.3 on unpkg](https://img.shields.io/badge/unpkg-v2.0.3-pink)](https://unpkg.com/@giantpaper/breakpoints.js@2.0.3/breakpoints.js)

It's like Bootstrap's breakpoints...but for Javascript! Lightweight and smol. jQuery or any other external libraries are not required for this work.

## Installation

With npm

```
npm install @giantpaper/breakpoints.js
```

With yarn

```
yarn add @giantpaper/breakpoints.js
```

With unpkg

```
<script type="text/javascript" src="https://unpkg.com/@giantpaper/breakpoints.js@2.0.0/breakpoints.min.js"></script>
```

## Usage

```
import Breakpoints from './breakpoints.js';

// List your breakpoints here. Name them whatever you want. If left blank, default ones will be used.
// Just like Bootstrap, the first breakpoint must always be 0 otherwise it won't work as expected.
	let breakpoints = new Breakpoints([
		[	'xs',	0	],
		[	'sm',	480	],
		[	'md',	768	],
		[	'lg',	1024	],
		[	'xl',	1280	],
		[	'x2',	1440	],
		[	'x3',	1690	],
		[	'x4',	1920	],
		[	'x5',	2560	],
	]);

breakpoints.get() // returns current breakpoint

breakpoints.is('x4') // true if the current breakpoint is x4

breakpoints.gte('x4') // true if the current breakpoint is greater than or equal to x4

breakpoints.lte('x4') // true if the current breakpoint is lesser than or equal to x4

breakpoints.between('md', 'x4') // true if the current breakpoint is between md and x4

breakpoints.lte('notARealBreakpoint') // will return false if not registered as a breakpoint
```

## Important

breakpoints.js doesn't automatically update the breakpoint on window resize. So if this is important to you, you might actually want to do something like this instead:

(With Vanilla JS)
```
import Breakpoints from './breakpoints.js';

let breakpoints = new Breakpoints;

var run = function() {
	// insert your code here, ex:
	if (breakpoints.gte('xl')) {
		// do desktop-related code here
	}
};

window.onload = run;
window.onresize = run;
```

(With jQuery)
```
import Breakpoints from './breakpoints.js';

let breakpoints = new Breakpoints;

var run = function() {
	// insert your code here, ex:
	if (breakpoints.gte('xl')) {
		// do desktop-related code here
	}
};

$(window)
	.on('load', run)
	.on('resize', run);
```