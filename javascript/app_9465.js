const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = +input.shift();
const t = [];
const top = [];
const bottom = [];
for(let i = 0; i < N; i++){
    t.push(+input.shift());
    top.push(input.shift().split(" ").map(e=>+e));
    bottom.push(input.shift().split(" ").map(e=>+e));
}

function solution(n, T, firstN, secondN){
    for(let i = 0; i < n; i++){
        const dp = Array(T[i] + 1);
        for(let j = 0; j <= T[i]; j++){
            dp[j] = Array(3).fill(0);
        }
        dp[1][0] = 0;
        dp[1][1] = firstN[i][0];
        dp[1][2] = secondN[i][0];
        for(let j = 2; j <= T[i]; j++){
            dp[j][0] = Math.max(dp[j-1][0], dp[j-1][1], dp[j-1][2]);
            dp[j][1] = Math.max(dp[j-1][0] + firstN[i][j-1],  dp[j-1][2] + firstN[i][j-1]);
            dp[j][2] = Math.max(dp[j-1][0] + secondN[i][j-1],  dp[j-1][1] + secondN[i][j-1]);
        }
        console.log(Math.max(...dp[T[i]]));
    }
}
solution(N, t, top, bottom);