const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const T = input.shift();
let m = input.map(e => +e);

//1, 2, 3 더하기 5 문제
//코멘트 된 부분처럼 풀면 메모리초과로 실패가 뜬다.
//그 이유는 각 케이스마다 Array를 만들고 for루프를 돌기때문
//그래서 케이스 중 가장 큰수를 기준으로 dp 테이블을 만들고 각 케이스 값을 참조하면 끝!

function solution(n, m){
    /*
    for(let i = 0 ; i < n; i++){
        let dp = Array(3);
        for(let j = 0; j < 3; j++){
            dp[j] = Array(m[i] + 1).fill(0);
        }
        
        dp[0][1] = 1;
        dp[1][2] = 1;
        dp[0][3] = 1;
        dp[1][3] = 1;
        dp[2][3] = 1;
        for(let j = 4; j <= m[i]; j++){
            dp[0][j] = (dp[1][j-1] + dp[2][j-1]) % 1000000009;
            dp[1][j] = (dp[0][j-2] + dp[2][j-2]) % 1000000009;
            dp[2][j] = (dp[0][j-3] + dp[1][j-3]) % 1000000009;
        }
        console.log((dp[0][m[i]] + dp[1][m[i]] + dp[2][m[i]]) % 1000000009 );
        
    }
    */
   const max = Math.max(...m);
   let dp = Array(3);
   for(let j = 0; j < 3; j++){
       dp[j] = Array(max + 1).fill(0);
   }
   
   dp[0][1] = 1;
   dp[1][2] = 1;
   dp[0][3] = 1;
   dp[1][3] = 1;
   dp[2][3] = 1;
   for(let j = 4; j <= max; j++){
       dp[0][j] = (dp[1][j-1] + dp[2][j-1]) % 1000000009;
       dp[1][j] = (dp[0][j-2] + dp[2][j-2]) % 1000000009;
       dp[2][j] = (dp[0][j-3] + dp[1][j-3]) % 1000000009;
   }
   for(let i = 0; i < n; i++){
        console.log((dp[0][m[i]] + dp[1][m[i]] + dp[2][m[i]]) % 1000000009 );
   }
    
}
solution(T, m);