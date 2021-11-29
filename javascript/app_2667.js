const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let w = +input.shift();

let board = [];
let visited = [];
for(let i = 0; i < w; i++){
    board[i] = [];
    board[i].push(...input[i].split("").map(e => +e));
    visited[i] = Array(w).fill(false);
}
let answer = [];
function bfs(x, y){
    const queue = [];
    let num = 1;
    queue.push([x, y]);
    visited[x][y] = true;
    while(queue.length){
        const next = queue.shift();
        if(next[0] > 0){
            if(board[next[0] - 1][next[1]] && !visited[next[0] - 1][next[1]]){
                queue.push([next[0] - 1, next[1]]);
                visited[next[0] - 1][next[1]] = true;
                num++;
            }
        }
        if(next[0] < w - 1){
            if(board[next[0] + 1][next[1]] && !visited[next[0] + 1][next[1]]){
                queue.push([next[0] + 1, next[1]]);
                visited[next[0] + 1][next[1]] = true;
                num++;
            }
        }
        if(next[1] > 0){
            if(board[next[0]][next[1] - 1] && !visited[next[0]][next[1] - 1]){
                queue.push([next[0], next[1] - 1]);
                visited[next[0]][next[1] - 1] = true;
                num++;
            }
        }
        if(next[1] < w - 1){
            if(board[next[0]][next[1] + 1] && !visited[next[0]][next[1] + 1]){
                queue.push([next[0], next[1] + 1]);
                visited[next[0]][next[1] + 1] = true;
                num++;
            }
        }
    }
    return num;
}
for(let i = 0; i < w; i++){
    for(let j = 0; j < w; j++){
        if(board[i][j] && !visited[i][j]){
            answer.push(bfs(i, j));
        }
    }
}

console.log(answer.length + "\n" + answer.sort((a,b) => a-b).join("\n"));