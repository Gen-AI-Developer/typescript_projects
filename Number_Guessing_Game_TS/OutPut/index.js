import inquirer from "inquirer";
console.log('-- Simple Number Guessing Game -- ');
const RandomValue = Math.floor(Math.random() * 10);
// console.log('RandomValue', RandomValue)
const answer = await inquirer.prompt([
    {
        type: "input",
        name: "input_no",
        message: "Guess The Number"
    }
]);
// if (answer.input_no == RandomValue) {
//     console.log('Your are Right Your Guess is Right')
// }
// else if (answer.input_no < RandomValue) {
//     console.log('Your Guess Smaller Number')
//     getNumber()
// }
// else if (answer.input_no > RandomValue) {
//     console.log('Your Guess Larger Number')
//     getNumber()
// }