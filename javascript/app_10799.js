const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');


function solution(testCase){
    let stack = [];
    let answer = 0;
    let caseArr = testCase.split("");
    for(let i = 0; i < testCase.length; i++){
        if(caseArr[i] == "(" && caseArr[i+1] == ")"){
            i++;
            answer += stack.length;
            continue;
        }
        if(caseArr[i] == "("){
            stack.push("(");
        } else {
            stack.pop();
            answer += 1;
        }
    }
    console.log(answer);
}

solution(input[0]);