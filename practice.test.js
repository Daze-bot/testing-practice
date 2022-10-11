import {
  capitalize,
  reverseString,
} from './practice.js';

test('capitalize', () => {
  expect(capitalize('hello world')).toBe('Hello world');
})

test('reverseString', () => {
  expect(reverseString('this is a test')).toBe('tset a si siht');
})