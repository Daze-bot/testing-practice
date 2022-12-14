import {
  capitalize,
  reverseString,
  calculator,
  ceasarCipher,
  analyzeArray,
} from './practice.js';

test('capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
})

test('reverseString', () => {
  expect(reverseString('this is a test')).toBe('tset a si siht');
})

test('calculator', () => {
  expect(calculator.add(6, 3)).toBe(9);
  expect(calculator.subtract(6, 3)).toBe(3);
  expect(calculator.divide(6, 3)).toBe(2);
  expect(calculator.multiply(6, 3)).toBe(18);
})

test('caesar cipher', () => {
  expect(ceasarCipher('Hello World!', 3)).toBe('Khoor Zruog!');
  expect(ceasarCipher('Test me. I should work.', 14)).toBe('Hsgh as. W gvcizr kcfy.');
})

test('analyzeArray', () => {
  expect(analyzeArray([1,8,3,4,2,6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
})