const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let k = +input[0].split(" ")[1];

let visited = Array(100001).fill(false);
let time = Array(100001).fill(0);
function bfs(index){ 
    const queue = [];
    queue.push(index);
    visited[index] = true;
    let j = 0;
    while(j < queue.length){
        const i = queue[j++];
        if(i == k){
            break;
        }
        let prev = time[i];
        if(i - 1 >= 0){
            if(!visited[i-1]){
                queue.push(i - 1);
                visited[i-1] = true;
                time[i-1] = prev + 1;
            }
        }
        if(!visited[i + 1]){
            queue.push(i + 1);
            visited[i + 1] = true;
            time[i+1] = prev + 1;
        }
        if(i * 2 <= 100000){
            if(!visited[i * 2]){
                queue.push(i * 2);
                visited[i * 2] = true;
                time[i*2] = prev + 1;
            }
        }
    }
    console.log(time[k]);
}
bfs(n);