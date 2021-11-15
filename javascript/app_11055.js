const { trace } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const t = input[0].split(" ").map(e=>+e);

function solution(n, numbers){
    const dp = Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = Array(2).fill(0);
        dp[i][0] = 1;
        dp[i][1] = numbers[i];
    }
    for(let i = 1; i < n; i++){
        for(let j = 0; j < i; j++){
            if(numbers[i] > numbers[j]){
                dp[i][0] = Math.max(dp[i][0], dp[j][0] + 1);
            }
            if(dp[i][0] > dp[j][0]){
                dp[i][1] = Math.max(numbers[i] + dp[j][1], dp[i][1]);
            }
        }
    }
    console.log(Math.max(...dp.map(e=>e[1])));
}
solution(N, t);