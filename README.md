# breakpoints.js

It's like Bootstrap's breakpoints...but for Javascript! jQuery or any other external libraries are not needed.

## Usage

`import Breakpoints from '../breakpoints.js';

// List your breakpoints here. If left blank, default ones will be used.
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

breakpoints.between('md', 'x4') // true if the current breakpoint is between md and x4`