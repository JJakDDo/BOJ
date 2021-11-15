const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();
const inputs = [];
for(let i = 0; i < N; i++){
    inputs.push(input[i]);
}



function solution(testCase){
    for(let i = 0; i < testCase.length; i++){
        const arr = testCase[i].split("");
        const arr2 = [];
        for(let j = 0; j < arr.length; j++){
            if(arr[j] == ")" && arr2.length == 0){
                arr2.push(")");
                break;
            }
            if(arr[j] == "("){
                arr2.push("(");
            } else {
                arr2.pop();
            }
        }
        console.log(arr2.length > 0 ? "NO" : "YES");

    }
}

solution(inputs);