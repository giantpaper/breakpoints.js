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
		this.brkptTests = {}
		this.list = {}
		this.winW = 0
	}

	setValues() {
		this.winW = window.innerWidth;
		this.config.forEach((v, k, a) => {
			let label = v[0]
			let res = v[1]
			let winW = this.winW
			if (a[k+1] !== undefined) {
				let next = a[k+1][1]
				this.list[label] = res
				this.brkptTests[label] = res <= winW && winW < next
			}
			else {
				this.list[label] = res
				this.brkptTests[label] = res <= winW
			}
		});
	}

	getKeyByValue(object, value) {
	  return Object.keys(object).find(key => object[key] === value)
	}

	lte(test) {
		this.setValues();
		if (this.list[test] === undefined) {
			return false;
		}
		return this.winW <= this.list[test] || this.brkptTests[test];
	}
	gte(test) {
		this.setValues();
		if (this.list[test] === undefined) {
			return false;
		}
		return this.winW >= this.list[test];
	}
	is(test) {
		this.setValues();
		if (this.list[test] === undefined) {
			return false;
		}
		return this.brkptTests[test];
	}
	get() {
		this.setValues();
		return this.getKeyByValue(this.brkptTests, true);
	}
	between(test, test2) {
		this.setValues();
		if (this.list[test] === undefined || this.list[test2] === undefined) {
			return false;
		}
		return this.list[test] <= this.winW && this.winW <= this.list[test2];
	}
}
