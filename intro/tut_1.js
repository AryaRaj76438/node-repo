// const amount = 12
// if(amount>3){
//     console.log('small number')
// }
// else {
//     console.log('large number')
// }

// console.log("It's your first call in node js")

const readline = require('readline');
// create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What is your name? ", (answer) =>{
    console.log(`Hello ${answer}!`);
    rl.close();  // to close the ans
})

// console.log(answer);