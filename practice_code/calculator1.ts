// This  is a basic code it works good for positive integers but doesn't cater for negative and decimal numbers.

import inquirer from "inquirer";
import chalk from "chalk";

// This function find out the result according to the operand for first and second number
function resultFinder(firstNumber: number, operand: string, secondNumber: number) {
    // const result = `${firstNumber}${operand}${secondNumber}`
    if (operand == "+") {
        return (firstNumber + secondNumber)
    } else if (operand == "-") {
        return (firstNumber - secondNumber)
    } else if (operand == "*") {
        return (firstNumber * secondNumber)
    } else if (operand == "/") {
        return (firstNumber / secondNumber)
    }
}


// This function receives the input string from user and call in the resultFinder function and console out the results
function calculator(query: string) {
    const match = query.match(/(\d+)([+\-*\/])(\d+)/); // regex to separate digits and operand

    if (match) {
        const firstNumber = parseInt(match[1]);
        const operand = match[2];
        const secondNumber = parseInt(match[3]);
        let result = resultFinder(firstNumber,operand,secondNumber) 
        let answer = Number.isInteger(result)? result : result?.toFixed(2) // round off to two decimal if in case result is float

        // console result with chalk module
        console.log(chalk.bold.green("You typed: "),chalk.bold.blue(firstNumber), chalk.bold.white(operand), chalk.bold.blue(secondNumber));
        console.log(chalk.bold.green("Result   : ",chalk.bold.red(answer)));
        // simple console of result
        console.log("First Number: ", firstNumber);
        console.log("Operand: ", operand);
        console.log("Second Number: ", secondNumber);
        console.log("Result: ",result);
    } else {
        console.log("Invalid expression format");
    }
}


// This function returns the use input as string and then call in the calculator function to display results
async function start() {
    do {
        let response = await inquirer.prompt(
            {
                type: "input",
                message: "Enter What you want to calculate: ",
                name: "query"

            }
        )
        calculator(response.query)
    } while (true)
}

start()