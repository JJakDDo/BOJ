const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input[0];
console.log(input);
const inputs = [];
for(let i = 1; i <= N; i++){
    inputs.push(input[i]);
}



function solution(testCase){
    let answer = [];
    let output = [];
    for(let i = 0; i < testCase.length; i++){
        const caseArr = testCase[i].split(" ");
        switch(caseArr[0]){
            case "push":
                answer.push(+caseArr[1]);
                break;
            case "pop":
                output.push(answer.length > 0 ? answer.pop() : -1);
                break;
            case "size":
                output.push(answer.length);
                break;
            case "empty":
                output.push(answer.length > 0 ? 0 : 1);
                break;
            case "top":
                output.push(answer.length > 0 ? answer[answer.length - 1] : -1);
                break;
            default:
                break;
        }
    }
    console.log(output.join("\n"));
}

solution(inputs);