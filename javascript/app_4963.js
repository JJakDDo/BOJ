let input = [];
let visited = [];
let board = [];
let flag = false;

function bfs(w, h, index, count){
    const queue = [];
    queue.push(index);
    visited[index] = count;
    if(board[index]){
        flag = true;
    }
    while(queue.length){
        const next = queue.shift();
        if(next + w < w*h && board[next + w]){
            if(!visited[next + w]){
                queue.push(next + w);
                visited[next + w] = count;
                flag = true;
            }
        }
        if(next + 1 < w*h && board[next + 1]){
            if(!visited[next + 1] && (next + 1) % w != 0){
                queue.push(next + 1);
                visited[next + 1] = count;
                flag = true;
            }
        }
        if(next - 1 >= 0 && board[next - 1]){
            if(!visited[next - 1] && next % w != 0){
                queue.push(next - 1);
                visited[next - 1] = count;
                flag = true;
            }
        }
        if(next + w + 1 < w*h && board[next + w + 1]){
            if(!visited[next + w + 1] && (next + 1) % w != 0){
                queue.push(next + w + 1);
                visited[next + w + 1] = count;
                flag = true;
            }
        }

        if(next + w - 1 < w*h && board[next + w - 1]){
            if(!visited[next + w - 1] && next % w != 0){
                queue.push(next + w - 1);
                visited[next + w - 1] = count;
                flag = true;
            }
        }

        if(next - w + 1 > 0 && board[next - w + 1]){
            if(!visited[next - w + 1] && (next + 1) % w != 0){
                queue.push(next - w + 1);
                visited[next - w + 1] = count;
                flag = true;
            }
        }

        if(next - w >= 0 && board[next - w]){
            if(!visited[next - w] && next > w){
                queue.push(next - w);
                visited[next - w] = count;
                flag = true;
            }
        }

        if(next - w - 1 >= 0 && board[next - w - 1]){
            if(!visited[next - w - 1] && next % w != 0){
                queue.push(next - w - 1);
                visited[next - w - 1] = count;
                flag = true;
            }
        }
    }
}

const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.on('line', function(line) {
    if(line == "0 0"){
        rl.close();
    } else {
        input.push(line);
        if(input.length == (+input[0].split(" ")[1] + 1)){   
            const wh = input.shift().split(" ");
            const w = +wh[0];
            const h = +wh[1];
            for(let i = 0; i < h; i++){
                board.push(...input[i].split(" ").map(e => +e));
            }
            visited = Array(w*h).fill(0);
            let count = 0;
            for(let i = 0; i < w*h; i++){
                if(!visited[i] && board[i]){
                    bfs(w, h, i, count + 1);
                    if(flag){
                        count++;
                    }
                }
                flag = false;
            }
            console.log(count);
            input = [];    
            visited = [];
            board = [];
        }
    }
}).on("close", function(){
    process.exit();
});