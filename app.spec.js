const findGaps = require('./app');

test('find gaps returns 1 gap', () => {
  const arr1 = [3, 5];
  const arr2 = [2, 7, 3];
  const arr3 = [6];

  expect(findGaps(arr1, arr2, arr3)).toBe(1);
});
