import readlineSync from "readline-sync";

export function askForName() {
  const name = readlineSync.question("May I have your name? ");

  return name;
}

export function greet(name) {
  console.log(`Hello, ${name}!`);
}
