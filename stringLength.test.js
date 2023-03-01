const stringLength = require('./stringLength');

test('String Length', () => {
  
  const result = () => stringLength(string);

  expect(result).toThrow(Error);
});