module.exports = function getBase(d) {
		for (let i = 2; i < 10e4; i++) {
			let b = decToAny(d, i).replace(/1/g, "");
			if (b.length == 0) {
				return i;
			}
		}
		for (let x = 10e4; x < Math.pow(d, 1 / 4); x++) {
			if (x * x * x * x + x * x * x + x * x + x + 1 - d == 0) {
				return x;
			}
		}
		for (let x = 10e4; x < Math.pow(d, 1 / 3); x++) {
			if (x * x * x + x * x + x + 1 - d == 0) {
				return x;
			}
		}
		let x = ( ( Math.sqrt(4 * d - 3) - 1) / 2);
		if (x % 1 == 0) {
			return x;
		}
		return d - 1;
	};

	function decToAny(d, i) {
		let str = "";
		if (d == '0') {
			return '0';
		}
		while (d > 0) {
			let a = d % i;
			str = a + str;
			d = Math.floor(d / i);
		}
		return str;
	}
