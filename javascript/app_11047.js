const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let k = +input[0].split(" ")[1];
let coins = [];
for(let i = 1; i <= n; i++){
    coins[i-1] = +input[i];
}
function solution(){
    let num = 0;
    coins.sort((a,b) => b-a).forEach((elem) => {
        if(elem <= k){
            num += Math.floor(k / elem);
            k %= elem;
        }
    });
    return num;
}



console.log(solution());