// creates a function that displays
// 'Welcome to Holberton School, what is your name?'
// takes input from stdin as text
// new line, then displays 'Your name is: <text>'

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
});
rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    console.log(`Your name is: ${answer}`);
    rl.close();
});
rl.on('close', () => {
    console.log('This important software is now closing');
    process.exit(0);
    });
