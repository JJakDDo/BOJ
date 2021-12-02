const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let k = +input[0].split(" ")[2];

function solution(){
    let count = 0;
    while(n+m-3 >= k){
        if(n - 2 >= 0 && m - 1 >= 0){
            n -= 2;
            m -= 1;
            count++;
        } else {
            break;
        }
    }
    return count;
}

console.log(solution());