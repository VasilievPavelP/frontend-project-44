import { askQuestion, gameCombine, getAnswer } from './game-supports.js';

function calculate(operand, a, b) {
  if (operand === '+') {
    return a + b;
  }
  if (operand === '-') {
    return a - b;
  }
  if (operand === '*') {
    return a * b;
  }
  return undefined;
}

function game() {
  const operands = ['+', '-', '*'];
  const randomOperation = Math.floor(Math.random() * 3);
  const randomFirstNumber = Math.floor(Math.random() * 100) + 1;
  const randomSecondNumber = Math.floor(Math.random() * 100) + 1;

  const gameQuestion = `${randomFirstNumber} ${operands[randomOperation]} ${randomSecondNumber}`;

  askQuestion(gameQuestion);
  const answer = getAnswer();

  const correctAnswer = calculate(
    operands[randomOperation],
    randomFirstNumber,
    randomSecondNumber,
  );

  const isCorrect = +answer === correctAnswer;

  return [isCorrect, answer, correctAnswer];
}

export default function playUpToCalc(num, name) {
  const rules = 'What is the result of the expression?';

  gameCombine(num, name, rules, game);
}
