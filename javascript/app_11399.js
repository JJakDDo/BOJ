const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0];
let p = [];
input[1].split(" ").forEach((elem, idx) => {
    p[idx] = +elem;
});
function solution(){
    let prev = 0;
    let sum = 0;
    p.sort((a,b) => a-b).forEach((elem) => {
        sum += elem + prev;
        prev += elem; 
    });
    return sum;
}



console.log(solution());