import { askQuestion, gameCombine, getAnswer } from './game-supports.js';

function checkPrimeNumber(number) {
  if (number === 1) {
    return 'no';
  }

  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return 'no';
    }
  }

  return 'yes';
}

function game() {
  const primeNumber = Math.floor(Math.random() * 50) + 1;

  const correctAnswer = checkPrimeNumber(primeNumber);

  askQuestion(primeNumber);
  const answer = getAnswer();

  const isCorrect = answer === correctAnswer;

  return [isCorrect, answer, correctAnswer];
}

export default function playUpToPrime(num, name) {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  gameCombine(num, name, rules, game);
}
