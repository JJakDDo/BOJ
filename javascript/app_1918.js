const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    const t = testCase.split("");
    const operatorStack = [];
    let top = -1;
    let output = "";
    for(let i = 0; i < t.length; i++){
        if(/[A-Z]/.test(t[i])){
            output += t[i];
        } else {
            switch(t[i]){
                case "*":
                case "/":
                    while(operatorStack.length && (operatorStack[top] == "*" || operatorStack[top] == "/")){
                        output += operatorStack.pop();
                        top--;
                    }
                case "(":
                    operatorStack.push(t[i]);
                    top++;
                    break;
                case "+":
                case "-":
                    while(operatorStack.length && operatorStack[top] != "("){
                        output += operatorStack.pop();
                        top--;
                    }
                    operatorStack.push(t[i]);
                    top++;
                    break;
                case ")":
                    while(operatorStack[top] != "("){
                        output += operatorStack.pop();
                        top--;
                    }
                    operatorStack.pop();
                    top--;
                    break;
            }
        }
    }
    while(operatorStack.length){
        output += operatorStack.pop();
    }
    console.log(output);
}
solution(input[0]);