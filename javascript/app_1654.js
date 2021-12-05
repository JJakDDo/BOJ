const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let k = +input[0].split(" ")[0];
let n = +input[0].split(" ")[1];
let wires = [];
for(let i = 1; i <= k; i++){
    wires[i-1] = +input[i];
}
function solution(){
    let max = 0;
    let start = 1;
    let end = Math.max(...wires);
    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        let count = 0;
        wires.forEach(elem => {
            count += Math.floor(elem / middle);
        });

        if(count < n){
            end = middle - 1;
        } else if(count >= n){
            max = Math.max(middle, max);
            start = middle + 1;
        }
    }
    return max;
}



console.log(solution());