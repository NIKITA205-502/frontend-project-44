import runGameLogic from '../gameLogic.js';
import getRandomNumber from '../utils.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const numQuestion = getRandomNumber(1, 50);
  const answer = isEven(numQuestion) ? 'yes' : 'no';
  return [numQuestion, answer];
};

const runEvenGame = () => {
    runGameLogic(description, generateRound);
};
export default runEvenGame;