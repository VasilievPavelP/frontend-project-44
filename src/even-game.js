import {
  askQuestion,
  gameCombine,
  getAnswer,
  reportCombine,
} from "./game-supports.js";

function game(name) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  askQuestion(randomNumber);

  const answer = getAnswer();

  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

  const isCorrect = answer.trim() === correctAnswer;

  reportCombine(isCorrect, answer, correctAnswer, name);

  return isCorrect;
}

export default function playUpToEven(num, name) {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameCombine(num, name, rules, () => game(name));
}
