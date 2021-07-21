import logic from './index.js';
import { getRandomInt } from '../random.js';

const generateQuestion = () => {
  const question = getRandomInt(1, 100);
  const correctAnswer = question % 2 === 0 ? 'yes' : 'no';
  return [question, correctAnswer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  logic(rules, generateQuestion);
};
