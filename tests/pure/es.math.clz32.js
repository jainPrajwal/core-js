import clz32 from 'core-js-pure/es/math/clz32';

QUnit.test('Math.clz32', assert => {
  assert.isFunction(clz32);
  assert.same(clz32(0), 32);
  assert.same(clz32(1), 31);
  assert.same(clz32(-1), 0);
  assert.same(clz32(0.6), 32);
  assert.same(clz32(2 ** 32 - 1), 0);
  assert.same(clz32(2 ** 32), 32);
});
