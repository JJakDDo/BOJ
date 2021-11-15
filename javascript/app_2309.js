const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const s = input.map(elem =>  +elem);

function solution(testCase){
    testCase = testCase.sort((a,b) => a-b);
    const sum = testCase.reduce((acc,elem) => acc+elem);
    for(let i = 0; i < 8; i++){
        for(let j = 1; j < 9; j++){
            if(testCase[i] + testCase[j] == sum - 100){
                for(let k = 0; k < 9; k++){
                    if(k != i && k != j){
                        console.log(testCase[k]);
                    }
                }
                return
            }
        }
    }
}
solution(s.slice(0, 9));