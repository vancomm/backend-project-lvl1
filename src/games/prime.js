import logic from './index.js';
import { getRandomInt } from '../random.js';

const isPrime = (n) => {
  if (n <= 3) return n > 1;

  if ((n % 2 === 0 || n % 3 === 0)) return false;

  for (let i = 5; i ** 2 <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }
  return true;
};

const generateQuestion = () => {
  const n = getRandomInt(2, 1000);
  const question = n;
  const correctAnswer = isPrime(n) ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  logic(rules, generateQuestion);
};
