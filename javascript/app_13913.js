const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input[0].split(" ")[0];
let k = +input[0].split(" ")[1];
//배열로 만들어서 Path를 만들면 메모리초과가 뜨기때문에 Object로 Dictionary를 만들어서
//각 숫자의 이전 숫자를 Dictionary에 저장해서 해결함. 예) 3 -> 6 -> 7 -> 14로 이동했다면 {14:7, 7:6, 6:3} 으로 만듦
let visited = Array(100001).fill(false);
let time = Array(100001).fill(0);
let path = {};
function bfs(index){ 
    const queue = [];
    queue.push(index);
    visited[index] = true;
    let j = 0;
    path[index] = index;
    while(j < queue.length){
        const i = queue[j++];
        if(i == k){
            break;
        }
        let prev = time[i];
        let prevPath = path[i];
        if(i - 1 >= 0){
            if(!visited[i-1]){
                queue.push(i - 1);
                visited[i-1] = true;
                time[i-1] = prev + 1;
                path[i-1] = i;
            }
        }
        if(!visited[i + 1]){
            queue.push(i + 1);
            visited[i + 1] = true;
            time[i+1] = prev + 1;
            path[i+1] = i;
        }
        if(i * 2 <= 100000){
            if(!visited[i * 2]){
                queue.push(i * 2);
                visited[i * 2] = true;
                time[i*2] = prev + 1;
                path[i*2] = i;
            }
        }
    }
    console.log(time[k]);
    let temp = time[k];
    let answer = [];
    answer.push(k);
    for(let i = 0; i < temp; i++){
        answer.unshift(path[k]);
        k = path[k];
    }
    console.log(answer.join(" "));
}
bfs(n);