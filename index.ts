#! /usr/bin/env node

import inquirer from "inquirer";


console.log("\n\tWELLCOME TO \'MUZAMMILZAMIN\' - CLI Simple Calculator")

const answer = await inquirer.prompt([

{name : "firstNumber",
type: "number",
message: "ENTER YOUR FIRST NUMBER"},


    { message : "ENTER YOUR SECOND NUMBER",
     type : "number" , 
     name : "secondNumber",
    },

    {name: "operator",
    type: "list",
    message : "SELECT ONE OF OPERATOR TO PERFORM ACTION",
    choices: ["ADDITION","SUBSTRACTION","MULTIPICATION","DIVISION"],  //IK EXTENSION INSTALL KRNA HA PRETIER
    },
]); 

// CONDITIONAL STATEMENT

if (answer.operator=== "ADDITION"){
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operator=== "SUBSTRACTION"){
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operator=== "MULTIPICATION"){
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator=== "DIVISION"){
    console.log(answer.firstNumber / answer.secondNumber);
}
else {"please select correct operator"}

