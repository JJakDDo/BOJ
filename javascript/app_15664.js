const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let inputNum = input[1].split(" ").map(e => +e).sort((a,b) => a-b);

let output = [];
let visited = [];
let answer = [];

function solution(num){
    if(output.length == m){
        answer.push([...output]);
        return;
    }
    for(let i = num; i < n; i++){
        if(visited[i]){
            continue;
        }
        visited[i] = true;
        output.push(inputNum[i]);
        solution(i+1);
        output.pop();
        visited[i] = false;
    }
}
solution(0);
console.log(answer.map(e => e.join(" ")).filter((e, i, a) => a.indexOf(e) === i). join("\n"));