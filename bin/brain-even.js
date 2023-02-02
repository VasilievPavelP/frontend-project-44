#!/usr/bin/env node

import { askForName, greet, welcome } from "../src/cli.js";
import playUpToEven from "../src/games/even-game.js";

welcome();

const name = askForName();

greet(name);

playUpToEven(3, name);
