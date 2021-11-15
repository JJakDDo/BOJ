function solution(m){
    const dp = Array(m+1).fill(0);
    dp[1] = 1;
    dp[2] = 1;
    for(let i = 3; i <=m ; i++){
        dp[i] = BigInt(dp[i-1]) + BigInt(dp[i-2]);
    }
    console.log(dp[m].toString());
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