const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let m = +input[0].split(" ")[1];
let edges = [];
let visited = [];
for(let i = 0; i < n; i++){
    edges[i] = [];
    visited[i] = false;
}
for(let i = 1; i <= m; i++){
    edges[+input[i].split(" ")[0]].push(+input[i].split(" ")[1]);
    edges[+input[i].split(" ")[1]].push(+input[i].split(" ")[0]);
}
let answer = 0;
function solution(index, depth){  
    /*  
    let stacks = [];
    stacks.push(index);
    visited[index] = true;
    let depth = 1;
    let count = 0;
    while(stacks.length){
        const next = stacks.pop();
        count = edges[next].length;
        edges[next].forEach((elem) => {
            if(!visited[elem]){
                visited[elem] = true;
                stacks.push(elem);
                count--
            }
        });
        depth++;
        
        console.log(next);
    }
    console.log(depth);
    */
   if(answer == 1){
       return;
   }
   if(depth == 5){
        answer = 1;
        return;
   }
   visited[index] = true;
   edges[index].forEach((elem) => {
       if(!visited[elem]){
           solution(elem, depth+1)
       }
   });
   visited[index] = false; // 모든 인접한 노드들을 다 확인해야하기때문에 다시 flase로 만들어서 확인
}
for(let i = 0; i < n; i++){ // 노드들이 그룹으로 형성되고 그 그룹들이 이어지지 않을수도있기 때문에 모든 노드를 확인하기 위해 loop을 이용
    if(!visited[i]){
        solution(i, 1);
    }
}
console.log(answer);