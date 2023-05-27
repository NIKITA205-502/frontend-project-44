import runGameLogic from '../index.js';
import genRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const numQuestion = genRandomNumber(1, 50);
  const answer = isEven(numQuestion) ? 'yes' : 'no';
  return [numQuestion, answer];
};

const runEvenGame = () => {
  runGameLogic(description, generateRound);
};
export default runEvenGame;
