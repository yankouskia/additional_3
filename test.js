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
