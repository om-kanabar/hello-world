What did you ask Codex to build?

"Create a simple TypeScript hello world program that runs with Bun.

It should print a welcome message.
It should ask the user for their name.
It should store the answer in a variable.
It should print a personalized greeting using that name.
Please also explain how to run it."

What file or files did Codex create?

It gave me commands to create a file named index.ts

What Bun command did you use to run the program?

This laptop can't run bun so I used `npm start`

Did Codex get it right the first time?

No it did not.

What did you have to change, fix, or ask again?

I had to install a different package to resolve the issue. 

What extra feature did you add?

I added something that asks "What is your favorite programming language?"

What part of the TypeScript code do you understand best?

```ts
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
```

What part still feels confusing?

```ts
rl.question("What is your name? ", (name: string) => {
  console.log(`Hello, ${name}! Nice to meet you.`);

  rl.question("What is your favorite programming language? ", (language: string) => {
    console.log(`${language} is a great choice, ${name}!`);

    rl.close();
  });
});
```