#!/usr/bin/env node

import { askForName, greet, welcome } from '../src/cli.js';
import playUpToPrime from '../src/games/prime-game.js';

welcome();

const name = askForName();

greet(name);

playUpToPrime(3, name);
