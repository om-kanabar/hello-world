import * as readline from "readline";

console.log("Welcome to the TypeScript Hello World program!");
console.log("Type 'quit' to stop the program.");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForName(): void {
  rl.question("What is your name? ", (name: string) => {
    const trimmedName = name.trim();

    if (trimmedName.toLowerCase() === "quit") {
      console.log("Goodbye!");
      rl.close();
      return;
    }

    if (trimmedName === "") {
      console.log("Please type a name so I can greet you.");
      askForName();
      return;
    }

    console.log(`Hello, ${trimmedName}! Nice to meet you.`);

    rl.question("What is your favorite programming language? ", (language: string) => {
      const trimmedLanguage = language.trim();

      if (trimmedLanguage.toLowerCase() === "quit") {
        console.log("Goodbye!");
        rl.close();
        return;
      }

      if (trimmedLanguage === "") {
        console.log(`Nice, ${trimmedName}! You can tell me your favorite language next time.`);
      } else {
        console.log(`${trimmedLanguage} is a great choice, ${trimmedName}!`);
      }

      askForName();
    });
  });
}

askForName();