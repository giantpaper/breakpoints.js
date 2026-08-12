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
		this.b = {};
		this.n = {};
		this.w = 0;
		
		// Define the lastWindowW now...which will be....nothing if the page just loaded
		this.lastWindowW = null;

		// Debounce setValues and attach to resize
		this.handleResize = this.debounce(this.setValues.bind(this), 100);
		window.addEventListener('resize', this.handleResize);
	
		// Initialize
		this.setValues();
	}
	
	// Debounce helper
	debounce(func, delay) {
		let timeout;
		return function() {
			const context = this;
			const args = arguments;
			clearTimeout(timeout);
			timeout = setTimeout(() => {
				func.apply(context, args);
			}, delay);
		};
	}
	
	setValues() {
		// Get current window width
		let currentWindowW = window.innerWidth;
		// Stop if the window width hasn't changed
		// So we're not redundantly recalculating the same values over and over again
		if (this.lastWindowW === currentWindowW) {
			return;
		}
		// If the window width changed, update this.w with the current width
		this.w = currentWindowW;
		// And this.lastWindowW with the current width also, which will become
		// the previous width on next resize
		this.lastWindowW = currentWindowW;
		this.config.forEach((v, k, a) => {
			let label = v[0];
			let res = v[1];
			if (a[k+1] !== undefined) {
				let next = a[k+1][1];
				this.n[label] = res;
				this.b[label] = res <= currentWindowW && currentWindowW < next;
			} else {
				this.n[label] = res;
				this.b[label] = res <= currentWindowW;
			}
		});
	}
	getKeyByValue(object, value) {
	  return Object.keys(object).find(key => object[key] === value);
	}
	
	lte(test) {
		this.setValues();
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		return this.w <= this.n[test] || this.b[test];
	}
	gte(test) {
		this.setValues();
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		return this.w >= this.n[test];
	}
	is(test) {
		this.setValues();
		if (this.n[test] === undefined) {
			console.warn(`Breakpoint label \`${test}\` not found.`);
			return false;
		}
		return this.b[test];
	}
	get() {
		this.setValues();
		return this.getKeyByValue(this.b, true);
	}
	between(test, test2) {
		this.setValues();
		if (this.n[test] === undefined || this.n[test2] === undefined) {
			if (this.n[test] === undefined && this.n[test2] === undefined) {
				console.warn(`Breakpoint labels \`${test}\` && \`${test2}\` not found.`);
			} else if (this.n[test] === undefined) {
				console.warn(`Breakpoint label \`${test}\` not found.`);
			}
			else if (this.n[test] === undefined) {
				console.warn(`Breakpoint label \`${test2}\` not found.`);
			}
			return false;
		}
		return this.n[test] <= this.w && this.w <= this.n[test2];
	}
	destroy() {
		// Remove the resize event listener
		window.removeEventListener('resize', this.handleResize);
	}
}