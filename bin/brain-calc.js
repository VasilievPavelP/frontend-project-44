#!/usr/bin/env node

import { askForName, greet, welcome } from "../src/cli.js";
import playUpTo from "../src/calc-game.js";

welcome();

const name = askForName();

greet(name);

playUpTo(3, name);
