import ask from './ask.js';
import name from '../../cli.js';

export default () => {
  console.log('Welcome to the Brain Games!');

  const user = name;

  console.log(`Hello, ${user}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let won = true;

  for (let i = 0; i < 3; i += 1) {
    const number = Math.floor(Math.random() * 10) + 1;
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';
    const answer = ask(`Question: ${number}\nYour answer: `);
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
