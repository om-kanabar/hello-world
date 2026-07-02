import * as readline from "readline";

console.log("Welcome to the TypeScript Hello World program!");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("What is your name? ", (name: string) => {
  console.log(`Hello, ${name}! Nice to meet you.`);

  rl.question("What is your favorite programming language? ", (language: string) => {
    console.log(`${language} is a great choice, ${name}!`);

    rl.close();
  });
});