#!/usr/bin/env node

import { askForName, greet, welcome } from '../src/cli.js';

welcome();

const name = askForName();

greet(name);
