// This is improved version of the code. it works good for positive/negative integers and decimals

import inquirer from "inquirer";
import chalk from "chalk";

function resultFinder(firstNumber: number, operand: string, secondNumber: number) {
    switch (operand) {
        case "+":
            return firstNumber + secondNumber;
        case "-":
            return firstNumber - secondNumber;
        case "*":
            return firstNumber * secondNumber;
        case "/":
            return firstNumber / secondNumber;
        default:
            return NaN;
    }
}

function calculator(query: string) {
    const match = query.match(/([-]?\d+(\.\d+)?)([+\-*\/])([-]?\d+(\.\d+)?)/);

    if (match) {
        const firstNumber = parseFloat(match[1]);
        const operand = match[3];
        const secondNumber = parseFloat(match[4]);
        
        if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
            const result = resultFinder(firstNumber, operand, secondNumber);
            console.log(chalk.bold.green("You typed: "), chalk.bold.blue(firstNumber), chalk.bold.white(operand), chalk.bold.blue(secondNumber));
            
            if (Number.isInteger(result)) {
                console.log(chalk.bold.green("Result   : ", chalk.bold.red(result)));
            } else {
                console.log(chalk.bold.green("Result   : ", chalk.bold.red(result.toFixed(2))));
            }
        } else {
            console.log("Invalid numbers in expression");
        }
    } else {
        console.log("Invalid expression format");
    }
}

async function start() {
    do {
        let response = await inquirer.prompt({
            type: "input",
            message: "Enter What you want to calculate: ",
            name: "query"
        });
        calculator(response.query);
    } while (true);
}

start();
