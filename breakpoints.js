export default class Breakpoints {
	constructor(config) {
		// If no custom breakpoints are set, use these defaults
		this.config = config || [
			[	'xs',	0	],
			[	'sm',	480	],
			[	'md',	768	],
			[	'lg',	1024	],
			[	'xl',	1280	],
			[	'x2',	1440	],
			[	'x3',	1690	],
			[	'x4',	1920	],
			[	'x5',	2560	],
		];
		// Building the list of breakpoints with booleans as values
		// (depending of if it's the current breakpoint or not)
		this.b = {};
		// Building the current list of each breakpoints max-width
		// In this format -- key: value
		this.n = {};
		// Current window w -- set to 0 for now
		this.w = 0;

		// Debounce setValues and attach to resize
		this.handleResize = this.debounce(this.setValues.bind(this), 100);
		window.addEventListener('resize', this.handleResize);
	
		// Initialize
		this.setValues();
	}
	
	/**
	 * Debounce helper
	 * @param		{String}	callback - callback function
	 * @param		{Number}	delay - amount of time to pause between callbacks, in milliseconds
	 * @return	void
	 */
	debounce(callback, delay) {
		// Define `timeout`
		let timeout;
		return function() {
			// Clear timeout
			clearTimeout(timeout);
			// Define timeout again, wait 100ms then run it
			timeout = setTimeout(() => {
				callback.apply(this, arguments);
			}, delay);
		};
	}
	
	
	/**
	 * Set all the needed values so the below methods can detect breakpoints
	 * @param none  -  n/a no parameters
	 * @return void  - no return value
	 */
	setValues() {
		// Get current window width
		let currentWindowW = window.innerWidth;
		// Stop if the window width hasn't changed
		// So we're not redundantly recalculating the same values over and over again
		// this.w = last recorded window width
		if (this.w === currentWindowW) {
			return;
		}
		// If the window width changed, update this.w with the current width
		this.w = currentWindowW;
		// Go through the entire list of breakpoints
		this.config.forEach((v, k, a) => {
			// This breakpoint label
			let label = v[0];
			// This breakpoint value
			let res = v[1];
			// Check if there is another breakpoint set after the current one
			if (a[k+1] !== undefined) {
				// If so, set its value as `next`
				let next = a[k+1][1];
				// Set max width for breakpoint
				this.n[label] = res;
				// true = if it's the current breakpoint
				// false = if not
				this.b[label] = res <= currentWindowW && currentWindowW < next;
			// Resorts to this else if it's the last breakpoint in the list
			} else {
				// Set max width for breakpoint
				this.n[label] = res;
				// true = if it's the current breakpoint
				// false = if not
				this.b[label] = res <= currentWindowW;
			}
		});
	}
	/**
	 * Get a key from an object by value
	 * @param {object} object - the object that needs to be searched
	 * @param {string} value - the value you need the associated key of
	 */
	getKeyByValue(object, value) {
	  return Object.keys(object).find(key => object[key] === value);
	}
	
	/**
	 * Check if the current window width is less than or equal to the given breakpoint
	 * @param {string} test
	 * 									the name of the breakpoint the user is checking (either 
	 *									from the default list in the constructor or from the user's
	 * 									custom list)
	 * @return {boolean}
	 */
	lte(test) {
		// All these redundant this.setValues() in this method and the below
		// will only run if window width has changed
		this.setValues();
		// In this method and the below, check if the breakpoint actually exists
		// If not, output an error
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		// true = if this.w/window width is the current breakpoint or a lesser one
		// false = if this.w/window width is greater than the current breakpoint
		return this.w <= this.n[test] || this.b[test];
	}
	/**
	 * Check if the current window width is greater than or equal to the given breakpoint
	 * @param {string} test
	 * 									the name of the breakpoint the user is checking (either 
	 *									from the default list in the constructor or from the user's
	 * 									custom list)
	 * @return {boolean}
	 */
	gte(test) {
		this.setValues();
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		// true = if this.w/window width is the current breakpoint or a greater one
		// false = if this.w/window width is lesser than the current breakpoint
		return this.w >= this.n[test];
	}
	/**
	 * Check if the current window width is equal to the given breakpoint
	 * @param {string} test
	 * 									the name of the breakpoint the user is checking (either 
	 *									from the default list in the constructor or from the user's
	 * 									custom list)
	 * @return {boolean}
	 */
	is(test) {
		this.setValues();
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		// true = if this.w/window width is the current breakpoint
		// false = if this.w/window width is not the current breakpoint
		return this.b[test];
	}
	/**
	 * Get the current breakpoint based on window width
	 * @param none
	 * @return {string} - the breakpoint label
	 */
	get() {
		this.setValues();
		// returns the string of current breakpoint label
		return this.getKeyByValue(this.b, true);
	}
	/**
	 * Check if the current window width is between two breakpoints or equal to one of them
	 * @param {string} test
	 * 									the name of the breakpoint the user is checking (either 
	 *									from the default list in the constructor or from the user's
	 * 									custom list)
	 * @param {string} test2 - the name of the 2nd breakpoint to test
	 * @return {boolean}
	 */
	between(test, test2) {
		this.setValues();
		if (this.n[test] === undefined || this.n[test2] === undefined) {
			if (this.n[test] === undefined && this.n[test2] === undefined) {
				console.warn(`Breakpoint labels \`${test}\` && \`${test2}\` not found.`);
			} else if (this.n[test] === undefined) {
				console.warn(`Breakpoint label \`${test}\` not found.`);
			} else if (this.n[test2] === undefined) {
				console.warn(`Breakpoint label \`${test2}\` not found.`);
			}
			return false;
		}
		// true = if this.w/window width is one of the two defined breakpoints
		// or in between them
		// false = if this.w/window width is outside of the breakpoint range
		return this.n[test] <= this.w && this.w <= this.n[test2];
	}
	/**
	 * Completely remove any resize event listeners attached to the window
	 * For SPAs, long lived applications, etc
	 * @param none
	 * @return void
	 */
	destroy() {
		// Remove the resize event listener
		window.removeEventListener('resize', this.handleResize);
	}
}