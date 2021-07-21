import logic from './index.js';
import { getRandom, getRandomInt } from '../random.js';

const generateQuestion = () => {
  const op = getRandom(0, 1) > 0.5 ? '+' : '*';
  const a = getRandomInt(1, 30);
  const b = getRandomInt(1, 30);
  const question = [a, op, b].join(' ');
  const correctAnswer = (op === '+' ? a + b : a * b).toString();
  return [question, correctAnswer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  logic(rules, generateQuestion);
};
