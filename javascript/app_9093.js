const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();
const inputs = [];
for(let i = 0; i < N; i++){
    inputs.push(input[i]);
}



function solution(testCase){
    for(let i = 0; i < testCase.length; i++){
        
        console.log(testCase[i].split(" ").map((elem) => {
            return [...elem].reverse().join("");
        }).join(" "));
    }
}

solution(inputs);