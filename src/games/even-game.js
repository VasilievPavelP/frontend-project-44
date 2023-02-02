import { askQuestion, gameCombine, getAnswer } from "./game-supports.js";

function game() {
  const randomNumber = Math.floor(Math.random() * 10) + 1;

  askQuestion(randomNumber);

  const answer = getAnswer();

  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

  const isCorrect = answer === correctAnswer;

  return [isCorrect, answer, correctAnswer];
}

export default function playUpToEven(num, name) {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

  gameCombine(num, name, rules, game);
}
