import { askQuestion, gameCombine, getAnswer } from "./game-supports.js";

function generateProgression(progLength, missingItem, progStep) {
  const progArray = [];
  let correctAnswer = 0;
  for (let i = 1; i <= progLength; i += 1) {
    const currentStep = i * progStep;

    if (i === missingItem) {
      correctAnswer = currentStep;
      progArray.push("..");
    } else {
      progArray.push(currentStep);
    }
  }

  const progArrayToString = progArray.join(" ");

  return [progArrayToString, correctAnswer];
}

function game() {
  const progressionLength = Math.floor(Math.random() * (10 - 5 + 1) + 5);
  const missingItem = Math.floor(Math.random() * progressionLength + 1);
  const progressStep = Math.floor(Math.random() * 10) + 1;

  const [gameQuestion, correctAnswer] = generateProgression(
    progressionLength,
    missingItem,
    progressStep,
  );

  askQuestion(gameQuestion);
  const answer = getAnswer();

  const isCorrect = +answer === correctAnswer;

  return [isCorrect, answer, correctAnswer];
}

export default function playUpToProgression(num, name) {
  const rules = "What number is missing in the progression?";

  gameCombine(num, name, rules, game);
}
