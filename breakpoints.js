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
		this.w = window.innerWidth;
		
		let setValues = () => {
			this.w = window.innerWidth;
			this.config.forEach((v, k, a) => {
				let res = v[1];
				let label = v[0];
				let w = this.w;
				if (a[k+1] !== undefined) {
					let next = a[k+1][1];
					this.n[label] = res;
					this.b[label] = res <= w && w < next;
				}
				else {
					this.n[label] = res;
					this.b[label] = res <= w;
				}
			});
		};
		
		setValues();
		window.onresize = setValues;
	}

	getKeyByValue(object, value) {
	  return Object.keys(object).find(key => object[key] === value);
	}
	
	lte(test) {
		return this.w <= this.n[test];
	}
	gte(test) {
		return this.w >= this.n[test];
	}
	is(test) {
		return this.b[test];
	}
	get() {
		return this.getKeyByValue(this.b, true);
	}
	between(test, test2) {
		return this.n[test] <= this.w && this.w <= this.n[test2];
	}
}