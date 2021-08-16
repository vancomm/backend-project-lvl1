import logic from './index.js';
import { getRandom, getRandomInt } from '../random.js';

const getOperation = () => {
  const random = getRandom(0, 1);
  if (random < 0.3) return '+';
  if (random < 0.6) return '-';
  return '*';
};

const getResult = (a, b, op) => {
  if (op === '+') return a + b;
  if (op === '-') return a - b;
  return a * b;
};

const generateQuestion = () => {
  const op = getOperation();
  const a = getRandomInt(1, 30);
  const b = getRandomInt(1, 30);
  const question = [a, op, b].join(' ');
  const correctAnswer = getResult(a, b, op).toString();
  return [question, correctAnswer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  logic(rules, generateQuestion);
};
