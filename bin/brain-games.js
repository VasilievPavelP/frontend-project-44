#!/usr/bin/env node

import { askForName, greet } from "../src/cli.js";

console.log("Welcome to the Brain Games!");

const name = askForName();

greet(name);
