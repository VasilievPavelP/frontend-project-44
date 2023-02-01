#!/usr/bin/env node

import { askForName, greet } from "../src/cli.js";
import playUpTo from "../src/even-game.js";

console.log("Welcome to the Brain Games!");

const name = askForName();

greet(name);

playUpTo(3, name);
