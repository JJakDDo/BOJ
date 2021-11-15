const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();

function GCD(a, b){
    if(a % b == 0){
        return b;
    } else {
        return GCD(b, a % b);
    }
}
function solution(testCase){
    for(let k = 0; k < N; k++){
        const nums = testCase[k].split(" ").map((e) => +e);
        const len = nums.shift();
        let answer = 0;
        for(let i = 0; i < len-1; i++){
            for(let j = i+1; j < len; j++){
                answer += GCD(nums[i], nums[j]);
            }
        }
        console.log(answer);
    }
    
}
solution(input);