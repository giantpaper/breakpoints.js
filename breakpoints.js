export default class Breakpoints {
	constructor(config) {
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
		
		let setValues = () => {
			this.w = window.innerWidth;
			this.b = {};
			this.n = {};
			this.config.forEach((v, k, a) => {
				let next = a[k+1];
				let res = v[1];
				let label = v[0];
				let w = this.w;
				if (next !== undefined) {
					this.n[label] = res;
					this.b[label] = res <= w && w < next[1];
				}
				else {
					this.n[label] = res;
					this.b[label] = res <= w;
				}
			});
		};
		
		window.onload = setValues;
		window.onresize = setValues;
	}
	
	lte(test) {
		return this.w <= this.n[test];
	}
	is(test) {
		return this.b[test];
	}
	gte(test) {
		return this.w >= this.n[test];
	}
	between(test, test2) {
		return this.n[test] <= this.w && this.w <= this.n[test2];
	}
}