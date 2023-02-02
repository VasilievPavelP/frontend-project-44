#!/usr/bin/env node

import { askForName, greet, welcome } from '../src/cli.js';
import playUpToGCD from '../src/games/gcd-game.js';

welcome();

const name = askForName();

greet(name);

playUpToGCD(3, name);
