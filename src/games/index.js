// common game logic

import readlineSync from 'readline-sync';
import name from '../cli.js';

export default (rules, generateQuestion) => {
  const user = name();

  console.log(rules);

  let won = true;
  const rounds = 3;

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = generateQuestion();

    const answer = readlineSync.question(`Question: ${question}\nYour answer: `);

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer :( Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${user}!`);
      won = false;
      break;
    }
  }

  if (won) console.log(`Congratulations, ${user}!`);
};
