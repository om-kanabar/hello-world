"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const readline = __importStar(require("readline"));
console.log("Welcome to the TypeScript Hello World program!");
console.log("Type 'quit' to stop the program.");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function askForName() {
    rl.question("What is your name? ", (name) => {
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
        rl.question("What is your favorite programming language? ", (language) => {
            const trimmedLanguage = language.trim();
            if (trimmedLanguage.toLowerCase() === "quit") {
                console.log("Goodbye!");
                rl.close();
                return;
            }
            if (trimmedLanguage === "") {
                console.log(`Nice, ${trimmedName}! You can tell me your favorite language next time.`);
            }
            else {
                console.log(`${trimmedLanguage} is a great choice, ${trimmedName}!`);
            }
            askForName();
        });
    });
}
askForName();
