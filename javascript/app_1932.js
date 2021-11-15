const { trace } = require('console');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const t = [];
for(let i = 0 ; i < N; i++){
    t.push(input[i].split(" ").map(e=>+e));
}

function solution(n, triangle){
    const dp = Array(n);
    for(let i = 0; i < n; i++){
        dp[i] = Array(i+1).fill(0);
    }
    dp[0][0] = triangle[0][0];
    for(let i = 1; i < n; i++){
        for(let j = 0; j < triangle[i].length; j++){
            if(j == 0){
                dp[i][j] = dp[i-1][j] + triangle[i][j];
            } else if(j == triangle[i].length - 1){
                dp[i][j] = dp[i-1][triangle[i-1].length - 1] + triangle[i][j];
            } else {
                dp[i][j] = Math.max(dp[i-1][j-1] + triangle[i][j], dp[i-1][j] + triangle[i][j]);
            }
        }
    }
    console.log(Math.max(...dp[n-1]));
}
solution(N, t);