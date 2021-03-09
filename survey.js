const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const answerArr = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  answerArr.push(answer);
  question2();
});
const question2 = () => {
  rl.question("What's an activity you like doing? ", (answer) => {
    answerArr.push(answer);
    question3();
  })
}
const question3 = () => {
  rl.question('What do you listen to while doing that? ', (answer) => {
    answerArr.push(answer);
    question4();
  })
}
const question4 = () => {
  rl.question('Which meal is your favourite (eg: dinner, brunch, etc.) ', (answer) => {
    answerArr.push(answer);
    question5();
  })
}
const question5 = () => {
  rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
    answerArr.push(answer);
    question6();
  })
}
const question6 = () => {
  rl.question("Which sport is your absolute favourite? ", (answer) => {
    answerArr.push(answer);
    question7();
  })
}
const question7 = () => {
  rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
    answerArr.push(answer);
    console.log(`Hi I'm ${answerArr[0]}, I like to listen to ${answerArr[2]} while ${answerArr[1]}.\nI love eating ${answerArr[4]} for ${answerArr[3]}.\nMy favorite sport is ${answerArr[5]}.\nOh and btw, ${answerArr[6]}!`);
    rl.close();
  })
}