import { askQuestion, gameCombine, getAnswer } from "./game-supports.js";

function calculateGCD(a, b) {
  const min = Math.min(a, b);

  for (let i = min; i > 1; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
}

function game() {
  const randomFirstNumber = Math.floor(Math.random() * 30) + 1;
  const randomSecondNumber = Math.floor(Math.random() * 30) + 1;

  const gameQuestion = `${randomFirstNumber} ${randomSecondNumber}`;

  const correctAnswer = calculateGCD(randomFirstNumber, randomSecondNumber);

  askQuestion(gameQuestion);
  const answer = getAnswer();

  const isCorrect = +answer === correctAnswer;

  return [isCorrect, answer, correctAnswer];
}

export default function playUpToGCD(num, name) {
  const rules = "Find the greatest common divisor of given numbers.";

  gameCombine(num, name, rules, game);
}
