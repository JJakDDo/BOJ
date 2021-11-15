function solution(m){
   let dp = Array(m+1);
   for(let i = 0; i <= m; i++){
       dp[i] = Array(10).fill(0);
   }
   dp[1][0] = 0;
   for(let i = 1; i < 10; i++){
       dp[1][i] = 1;
   }

   for(let i = 2; i <= m; i++){
       for(let j = 0; j < 10; j++){
           if (j == 0){
               dp[i][j] += dp[i-1][j+1] % 1000000000;
           } else if (j == 9){
               dp[i][j] += dp[i-1][j-1] % 1000000000;
           } else {
                dp[i][j] += dp[i-1][j+1] % 1000000000;
                dp[i][j] += dp[i-1][j-1] % 1000000000;
           }
       }
   }
   console.log(dp[m].reduce((acc, elem)=>acc+elem) % 1000000000);
}


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line)

  rl.close();
}).on("close", function() {
    solution(input[0]);
  process.exit();
});