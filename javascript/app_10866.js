const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input[0];
const inputs = [];
for(let i = 1; i <= N; i++){
    inputs.push(input[i]);
}



function solution(testCase){
    let answer = [];
    let message = "";
    for(let i = 0; i < testCase.length; i++){
        const caseArr = testCase[i].split(" ");
        switch(caseArr[0]){
            case "push_back":
                answer.push(caseArr[1]);
                break;
            case "push_front":
                answer.unshift(caseArr[1]);
                break;
            case "pop_front":
                message += (answer.length > 0 ? answer.shift() : -1)+ "\n";
                break;
            case "pop_back":
                message += (answer.length > 0 ? answer.pop() : -1)+ "\n";
                break;
            case "size":
                message +=  answer.length +"\n";
                break;
            case "empty":
                message += (answer.length > 0 ? 0 : 1) + "\n";
                break;
            case "front":
                message += (answer.length > 0 ? answer[0] : -1) + "\n";
                break;
            case "back":
                message += (answer.length > 0 ? answer[answer.length - 1] : -1) + "\n";
                break;
            default:
                break;
        }
    }
    console.log(message);
}

solution(inputs);