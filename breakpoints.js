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
		//window.onresize = setValues;
		//window.addEventListener('resize', setValues);
	}
	
	setValues() {
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
	}
	
	getKeyByValue(object, value) {
	  return Object.keys(object).find(key => object[key] === value);
	}
	
	lte(test) {
		this.setValues();
		return this.w <= this.n[test];
	}
	gte(test) {
		this.setValues();
		return this.w >= this.n[test];
	}
	is(test) {
		this.setValues();
		return this.b[test];
	}
	get() {
		this.setValues();
		return this.getKeyByValue(this.b, true);
	}
	between(test, test2) {
		this.setValues();
		return this.n[test] <= this.w && this.w <= this.n[test2];
	}
}