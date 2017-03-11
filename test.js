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

describe("Manual tests", function(){
  it ("test base < 10", function(){
    assert.equal(getBase(3), 2);
    assert.equal(getBase(7), 2);
    assert.equal(getBase(21), 4);
    assert.equal(getBase(57), 7);
    assert.equal(getBase(1111), 10);
  });

  it ("big base tests", function(){
    assert.equal(getBase(1000002), 1000001);
    assert.equal(getBase(1000000002), 1000000001);
    assert.equal(getBase(1000000000000), 999999999999);
  });

  it ("tricky part : )", function(){
    assert.equal(getBase(1001001), 1000);
    assert.equal(getBase(1001001001), 1000);
    assert.equal(getBase(1001001001001), 1000);

    assert.equal(getBase(2500050001), 50000);
    assert.equal(getBase(125002500050001), 50000);
  });


});

describe("Random tests", function () {
  it ("random test with base < 10", function(){
    for (let i=0; i<100; i++) {
      let n = 2 + ~~(Math.random()*8);
      let num = 1 + n + n*n + n*n*n + n*n*n*n;
      assert.equal(getBase(num), n);
    }
  });

  it ("random test with base < 1000", function(){
    for (let i=0; i<100; i++) {
      let n = 2 + ~~(Math.random()*998);
      let num = 1 + n + n*n + n*n*n + n*n*n*n;
      assert.equal(getBase(num), n);
    }
  });

  it ("random test with base < 10000", function(){
    for (let i=0; i<100; i++) {
      let n = 2 + ~~(Math.random()*9998);
      let num = 1 + n + n*n + n*n*n;
      assert.equal(getBase(num), n);
    }
  });

  it ("random big base tests", function(){
    for (let i=0; i<10; i++) {
      let n = ~~(Math.sqrt(overload) + Math.random()*Math.sqrt(overload));
      let num = 1 + n;
      assert.equal(getBase(num), n);
    }
  });

  it ("random tricky part : )", function(){
    for (let i=0; i<5; i++) {
      let n = 2 + ~~(Math.random()*Math.sqrt(overload));
      let num = 1 + n + n*n;
      if (num < overload) {
        assert.equal(getBase(num), n);
      }
    }

    for (let i=0; i<5; i++) {
      let n = 2 + ~~(Math.random()*Math.pow(overload, 1/3));
      let num = 1 + n + n*n + n*n*n;
      if (num < overload) {
        assert.equal(getBase(num), n);
      }
    }

    for (let i=0; i<5; i++) {
      let n = 2 + ~~(Math.random()*Math.pow(overload, 1/4));
      let num = 1 + n + n*n + n*n*n + n*n*n*n;
      if (num < overload) {
        assert.equal(getBase(num), n);
      }
    }

    for (let i=0; i<5; i++) {
      let n = 2 + ~~(Math.random()*Math.pow(overload, 1/5));
      let num = 1 + n + n*n + n*n*n + n*n*n*n + n*n*n*n*n;
      if (num < overload) {
        assert.equal(getBase(num), n);
      }
    }
  });
});