const stringLength = require('./stringLength');

test('string returns the correct length', () => {
        expect(stringLength('hi')).toBe(2);
      });
      test('throws an error if the string is too short', () => {
        expect(() => stringLength('')).toThrow('String length must be between 1 and 10');
      });
      test('throws an error if the string is too long', () => {
        expect(() => stringLength('this string is too long')).toThrow('String length must be between 1 and 10');
      });