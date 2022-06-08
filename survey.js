const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ans = [];

rl.question("What's your name? Nicknames are also acceptable :) ", (answer) => {
  ans.push(answer);
  rl.question("What's an activity you like doing? ", (answer) => {
    ans.push(answer);
    rl.question("What do you listen to while doing that? ", (answer) => {
      ans.push(answer);
      rl.question("Which meal is your favourite (eg: dinner, brunch, etc.) ", (answer) => {
        ans.push(answer);
        rl.question("What's your favourite thing to eat for that meal? ", (answer) => {
          ans.push(answer);
          rl.question("Which sport is your absolute favourite? ", (answer) => {
            ans.push(answer);
            rl.question("What is your superpower? In a few words, tell us what you are amazing at! ", (answer) => {
              ans.push(answer);

              let profiler = `Hi! I am ${ans[0]} who likes ${ans[1]} while listening to ${ans[2]} music. ${ans[4]} for ${ans[3]} is my favorite meal. My absolute favorite sport is ${ans[5]} and my superpower is ${ans[6]}. Nice to meet you!`;
              console.log(profiler);
              rl.close();

            });
          });
        });
      });
    });
  });
});








