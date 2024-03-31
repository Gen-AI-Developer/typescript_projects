import inquirer from "inquirer"
console.log('-- Simple Number Guessing Game -- ')
console.log('-- Enter Any Number Between 1-to-9 -- ')

const RandomValue = Math.floor(Math.random() * 10)
async function evaluate() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "input_no",
            message: "Guess The Number..."
        }
    ])
    if (answer.input_no == RandomValue) {
        console.log('Your are Right Your Guess is Right')
    }
    else if (answer.input_no < RandomValue) {
        console.log('Your Guess Smaller Number')
        evaluate()
    }
    else if (answer.input_no > RandomValue) {
        console.log('Your Guess Larger Number')
        evaluate()
    }
}
evaluate()