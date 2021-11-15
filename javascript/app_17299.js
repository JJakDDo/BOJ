const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input[0];
const inputs = input[1].split(" ").map((e) => +e);



/*function solution(testCase){
    const sArr = testCase.split(" ").map((elem) => +elem);
    console.log(sArr.map((elem, idx) => {
        return sArr.slice(idx+1).find((e) => e > elem) ?? -1;
    }));
    
    
}
*/

function solution(n, testCase){
    let answer = Array(testCase.length).fill(-1);
    const sObj = {};
    let indexStack = [];
    let topStack = 0;
    for(let i = 0; i < n; i++){
        sObj[testCase[i]] = (sObj[testCase[i]] || 0) + 1;
    }
    for(let i = 0; i < n; i++){
        if(!indexStack.length){
            indexStack.push(i);
            topStack = 0;
        } else if(sObj[testCase[i]] <= sObj[testCase[indexStack[topStack]]]){
            indexStack.push(i);
            topStack++;
        }
        else {
            while(sObj[testCase[i]] > sObj[testCase[indexStack[topStack]]]){
                answer[indexStack[topStack]] = testCase[i];
                indexStack.pop();
                topStack--;
            }
            indexStack.push(i);
            topStack++;
        }
    }
    console.log(answer.join(" "));
}
solution(N, inputs);