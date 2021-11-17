const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];

let visited = Array(n + 1).fill(false);
let output = [];
let answer = "";

function solution(num){
    if(num == m){
        answer += `${output.join(" ")}\n`;
    }

    for(let i = 1; i <= n; i++){
        if(visited[i] || i < output[output.length-1]){
            continue;
        }
        visited[i] = true;
        output.push(i);
        solution(num+1);
        output.pop();
        visited[i] = false;
    }
}
solution(0);
console.log(answer);