function solution(e, s, m){
    let answer = e-1;
    while(true){
        if(answer % 15 == e-1 && answer % 28 == s-1 && answer % 19 == m-1){
            break;
        }
        answer += 15;
    }
    console.log(answer+1);
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
     solution(...input[0].split(" ").map(e => +e));
   process.exit();
 });