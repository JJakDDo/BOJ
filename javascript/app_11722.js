const { trace } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const t = input[0].split(" ").map(e=>+e);

function solution(n, numbers){
    const dp = Array(n).fill(1);
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(numbers[i] < numbers[j]){
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    console.log(Math.max(...dp));
}
solution(N, t);