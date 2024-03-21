import inquirer from "inquirer";
async function calculate() {
    const answer = await inquirer.prompt([
      { message: "Enter First number", type: "number", name: "firstNumber" },
      { message: "Enter Second number", type: "number", name: "secondNumber" },
      {
        message: "select one of the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["+", "-", "/", "*"],
      },
    ]);
  
    if (answer.operator === "+") {
      console.log(answer.firstNumber + answer.secondNumber);
    } else if (answer.operator === "-") {
      console.log(answer.firstNumber - answer.secondNumber);
    } else if (answer.operator === "/") {
      console.log(answer.firstNumber / answer.secondNumber);
    } else if (answer.operator === "*") {
      console.log(answer.firstNumber * answer.secondNumber);
    } else {
      console.log("Please select valid operator");
    }
  }
  
  calculate();
  









