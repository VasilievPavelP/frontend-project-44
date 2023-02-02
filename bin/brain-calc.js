#!/usr/bin/env node

import { askForName, greet, welcome } from '../src/cli.js';
import playUpToCalc from '../src/games/calc-game.js';

welcome();

const name = askForName();

greet(name);

playUpToCalc(3, name);
