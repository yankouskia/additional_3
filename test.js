const assert = require('assert');
const getBase = require('./src/index.js');

it('should calculate minimal base for 13', () => {
	assert.equal(getBase('13'), '3');
});

it('should calculate minimal base for 4681', () => {
	assert.equal(getBase('4681'), '8');
});

it('should calculate minimal base for 1398101', () => {
	assert.equal(getBase('1398101'), '4');
});

it('should calculate minimal base for 8421', () => {
	assert.equal(getBase('8421'), '20');
});

it('should calculate minimal base for 1099511627775', () => {
	assert.equal(getBase('1099511627775'), '2');
});

it('should calculate minimal base for 121', () => {
	assert.equal(getBase('121'), '3');
});

it('should calculate minimal base for 57', () => {
	assert.equal(getBase('57'), '7');
});

it('should calculate minimal base for 2593742460', () => {
	assert.equal(getBase('2593742460'), '11');
});

it('should calculate minimal base for 1398101', () => {
	assert.equal(getBase('1398101'), '4');
});

it('should calculate minimal base for 15672832819', () => {
	assert.equal(getBase('15672832819'), '6');
});

it('should calculate minimal base for 1525878906', () => {
	assert.equal(getBase('1525878906'), '5');
});

it('should calculate minimal base for 89478485', () => {
	assert.equal(getBase('89478485'), '4');
});

it('should calculate minimal base for 2391484', () => {
	assert.equal(getBase('2391484'), '3');
});

it('should calculate minimal base for 1000000000000000000', () => {
	assert.equal(getBase('1000000000000000000'), '999999999999999999');
});
let overload = Number.MAX_SAFE_INTEGER;

describe("Manual tests", function () {
	it("test base < 10000", function () {
		assert.equal(getBase(3), 2);
		assert.equal(getBase(7), 2);
		assert.equal(getBase(21), 4);
		assert.equal(getBase(57), 7);
		assert.equal(getBase(1111), 10);
		assert.equal(getBase(569570103122861), 4885);
		assert.equal(getBase(43656348948664), 35211);
		assert.equal(getBase(499383621169681), 4727);
		assert.equal(getBase(564457454427751), 4874);
		assert.equal(getBase(33236227491831), 506);
		assert.equal(getBase(5248889901299094), 1393);
	});



	it("part base simple numbers ", function () {
		assert.equal(getBase(1001001), 1000);
		assert.equal(getBase(1001001001), 1000);
		assert.equal(getBase(1001001001001), 1000);

		assert.equal(getBase(2500050001), 50000);
		assert.equal(getBase(125002500050001), 50000);
	});
	it("big base tests", function () {
		assert.equal(getBase(1000002), 1000001);
		assert.equal(getBase(1000000002), 1000000001);
		assert.equal(getBase(1000000000000), 999999999999);
		assert.equal(getBase(2562053811443491), 50616734);
		assert.equal(getBase(1005727403085231), 31713205);
		assert.equal(getBase(5080795560810301), 71279699);
		assert.equal(getBase(1005727403085231), 31713205);
		assert.equal(getBase(6777328486694493), 82324531);
	});
	});
 
  