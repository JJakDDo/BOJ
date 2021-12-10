const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const n = input.shift();
let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = []
    arr[i][0] = +input[i].split(" ")[0];
    arr[i][1] = +input[i].split(" ")[1];
}
console.log(arr.sort((a,b)=>a[1]-b[1]).sort((a,b)=>a[0]-b[0]).map(e=>e.join(" ")).join("\n"));