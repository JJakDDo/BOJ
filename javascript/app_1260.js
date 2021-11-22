const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let index = +input[0].split(" ")[2];
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
let answer1 = [];
let answer2 = [];
function dfs(index){  
    let stacks = [];
    stacks.push(index);
    while(stacks.length){
        const next = stacks.pop();
        if(!visited[next]){
            visited[next] = true;
            edges[next].sort((a,b)=>b-a).forEach((elem) => {
                if(!visited[elem]){
                    stacks.push(elem);
                }
            });
            answer1.push(next);
        }
    }
}
function bfs(index){  
    let queues = [];
    queues.push(index);
    while(queues.length){
        const next = queues.shift();
        if(!visited[next]){
            visited[next] = true;
            edges[next].sort((a,b)=>a-b).forEach((elem) => {
                if(!visited[elem]){
                    queues.push(elem);
                }
            });
            answer2.push(next);
        }
    }
}

dfs(index);
console.log(answer1.join(" "));
for(let i = 0; i <= n; i++){
    visited[i] = false;
}
bfs(index);
console.log(answer2.join(" "));