const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();

function solution(n){
    dp = Array(n+1).fill(Infinity);
    dp[1] = 1;
    for(let i = 2; i < n+1;i++){
        if(Number.isInteger(Math.sqrt(i))){
            dp[i] = 1;
        } else {
            for(let j = 1; Math.pow(j, 2) <= i; j++){
                dp[i] = Math.min(dp[i - Math.pow(j, 2)] + 1, dp[i]);
            }
        }
    }
    
    console.log(dp[n]);
}
solution(+T);