import readlineSync from "readline-sync";

function reportACorrectAnswer() {
  console.log("Correct!");
}

function reportAWrongAnswer(answer, correctAnswer, name) {
  console.log(
    `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again ${name}!`,
  );
}

export function getAnswer() {
  return readlineSync.question("Your answer: ");
}

function tellTheRules(rules) {
  console.log(rules);
}

export function askQuestion(num) {
  console.log(`Question: ${num}`);
}

function reportAVictory(name) {
  console.log(`Congratulations, ${name}!`);
}

export function reportCombine(isCorrect, answer, correctAnswer, name) {
  return isCorrect
    ? reportACorrectAnswer()
    : reportAWrongAnswer(answer, correctAnswer, name);
}

export function gameCombine(num, name, rules, game) {
  tellTheRules(rules);
  const correctAnswers = [];

  while (correctAnswers.length !== num) {
    const [isCorrect, answer, correctAnswer] = game();

    reportCombine(isCorrect, answer, correctAnswer, name);

    if (isCorrect) {
      correctAnswers.push("win");
    }
  }
  reportAVictory(name);
}
