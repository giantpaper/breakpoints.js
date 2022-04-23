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
<script type="text/javascript" src="https://unpkg.com/@giantpaper/breakpoints.js/breakpoints.min.js"></script>
```

## Usage

```
import Breakpoints from '@giantpaper/breakpoints.js';

// List your breakpoints here. Name them whatever you want. If left blank, default ones will be used.
// Just like Bootstrap, the first breakpoint must always be 0 otherwise it won't work as expected.  See Important heading below for more info.
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

**Have the breakpoints update .is(), .gte(), .lte(), etc values on window resize:**

breakpoints.js doesn't automatically update the breakpoint on window resize. So if this is important to you, you might actually want to do something like this instead:

(With Vanilla JS)
```
import Breakpoints from '@giantpaper/breakpoints.js';

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
import Breakpoints from '@giantpaper/breakpoints.js';

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

**The "smallest breakpoint must be 0" rule:**

The defined breakpoints are the minimum screen resolution at which the browser will start associating screen resolutions with their breakpoints. From the example below, "xs" devices will have a screen resolution of 0-479px, "sm" devices will have a screen resolution of "480-767px", etc. If you set the "xs" device to 320 for instance, there is no defined breakpoint for 0-319px displays, and the code will just error out.

**Small displays not registering as small breakpoints?**

If you're having trouble getting devices about 400px or less to register as the correct breakpoint, make sure you have this <meta> tag in your <head>:

```
<meta name="viewport" content="width=device-width, initial-scale=1">
```