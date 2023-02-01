import readlineSync from "readline-sync";

function askQuestion(num) {
  console.log(`Question: ${num}`);
}

function game(name) {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  askQuestion(randomNumber);

  const answer = readlineSync.question("Your answer: ");

  const correctAnswer = randomNumber % 2 === 0 ? "yes" : "no";

  const isTrue = answer.trim() === correctAnswer;

  console.log(
    isTrue
      ? "Correct!"
      : `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again ${name}!`,
  );

  return isTrue;
}

function tellTheRules() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
}

function reportAVictory(name) {
  console.log(`Congratulations, ${name}!`);
}

export default function playUpTo(num, name) {
  tellTheRules();
  const correctAnswer = [];

  while (correctAnswer.length !== num) {
    const answer = game(name);
    if (answer) {
      correctAnswer.push("win");
    }
  }
  reportAVictory(name);
}
