const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let k = +input[0].split(" ")[0];
let n = +input[0].split(" ")[1];
let woods = input[1].split(" ").map(e => +e);
function solution(){
    let max = 0;
    let start = 0;
    let end = 1000000000;
    let count;
    while(start <= end){
        let middle = Math.floor((start + end) / 2);
        count = 0;
        woods.forEach(elem => {
            if(elem >= middle){
                count += elem - middle
            }
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