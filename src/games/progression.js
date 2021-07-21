import logic from './index.js';
import { getRandomInt } from '../random.js';

const generateProgression = () => {
  const result = [];
  const length = getRandomInt(5, 15);
  const start = getRandomInt(10, 20);
  const increment = getRandomInt(3, 5);
  result[0] = start;
  for (let i = 1; i < length; i += 1) {
    result.push(result[i - 1] + increment);
  }
  return result;
};

const generateQuestion = () => {
  const array = generateProgression();
  const index = getRandomInt(0, array.length - 1);
  let correctAnswer = 0;
  [array[index], correctAnswer] = ['..', array[index].toString()];
  const question = array.join(' ');
  return [question, correctAnswer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  logic(rules, generateQuestion);
};
