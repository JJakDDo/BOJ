const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();
const inputs = [];
for(let i = 0; i < N; i++){
    inputs.push(+input[i]);
}



function solution(testCase){
    let i = 1;
    let j = 0;
    let arr = [];
    let answer = [];
    while(j < testCase.length){
        if(testCase[j] >= i){
            arr.push(i);
            answer.push("+");
            i++;
        } else {
            if(arr.pop() != testCase[j]){
                break;
            }
            answer.push("-");
            j++;
        }
    }
    if(arr.length > 0){
        console.log("NO");
    } else {
        console.log(answer.join("\n"));
    }
}

solution(inputs);