#!/usr/bin/env node

import { askForName, greet, welcome } from '../src/cli.js';
import playUpToProgression from '../src/games/progression-game.js';

welcome();

const name = askForName();

greet(name);

playUpToProgression(3, name);
