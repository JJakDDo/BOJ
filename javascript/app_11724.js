const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let edges = [];
let visited = [];
for(let i = 0; i <= n; i++){
    edges[i] = [];
    visited[i] = false;
}
for(let i = 1; i <= m; i++){
    edges[+input[i].split(" ")[0]].push(+input[i].split(" ")[1]);
    edges[+input[i].split(" ")[1]].push(+input[i].split(" ")[0]);
}
let answer = 0;
function dfs(index){  
    let stacks = [];
    stacks.push(index);
    visited[index] = true;
    while(stacks.length){
        const next = stacks.pop();
        edges[next].forEach((elem) => {
            if(!visited[elem]){
                stacks.push(elem);
                visited[elem] = true;
            }
        });
    }
}
for(let i = 1; i <= n; i++){ 
    if(!visited[i]){
        dfs(i, 1);
        answer++;
    }
}
console.log(answer);