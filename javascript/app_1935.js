const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();
const eq = input.shift();
const inputs = input.map((e) => +e);

function solution(n, equation, testCase){
    const eqArr = equation.split("");
    const stack = [];
    let answer = 0;
    for(let i = 0; i < eqArr.length; i++){
        if(/[A-Z]/.test(eqArr[i])){
            stack.push(testCase[eqArr[i].codePointAt(0) - 65]);
        } else {
            const b = stack.pop();
            const a = stack.pop();
            switch(eqArr[i]){
                case "*":
                    answer = a * b;
                    stack.push(answer);
                    break;
                case "/":
                    answer = a / b;
                    stack.push(answer);
                    break;
                case "+":
                    answer = a + b;
                    stack.push(answer);
                    break;
                case "-":
                    answer = a - b;
                    stack.push(answer);
                    break;
                default:
                    break;
            }
        }
    }
    console.log(answer.toFixed(2));
}
solution(N, eq, inputs);