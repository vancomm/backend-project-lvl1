/* eslint-disable no-param-reassign */
import logic from './index.js';
import { getRandomInt } from '../random.js';

const gcd = (a, b) => {
  if (a !== 0 && b !== 0) {
    if (a > b) return gcd(a % b, b);
    return gcd(a, b % a);
  }
  return a + b;
};

const generateQuestion = () => {
  const a = getRandomInt(1, 50);
  const b = getRandomInt(1, 50);
  const question = [a, b].join(' ');
  const correctAnswer = gcd(a, b).toString();
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  logic(rules, generateQuestion);
};
