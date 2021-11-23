const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let t = +input.shift();

let edges = [];
let visited = [];
let answer = "";

function dfs(index){
    let stack = [];
    stack.push(index);
    visited[index] = 1;
    while(stack.length){
        const next = stack.pop();
        for(let i = 0; i < edges[next].length; i++){
            const temp = edges[next][i];
            if(!visited[temp]){
                stack.push(temp);
                visited[temp] = -1 * visited[next];
            } else if(visited[temp] == visited[next]){
                answer = "NO";
                return;
            }
        }
    }
}

for(let i = 0; i < t; i++){
    edges = [];
    visited = [];
    answer = "";
    let temp = input.shift();
    let n = +temp.split(" ")[0];
    let m = +temp.split(" ")[1];
    for(let j = 0; j <= n; j++){
        edges[j] = [];
        visited[j] = 0;
    }
    for(let j = 0; j < m; j++){
        let temp = input.shift().split(" ");
        edges[+temp[0]].push(+temp[1]);
        edges[+temp[1]].push(+temp[0]);
    }  
    
    for(let i = 1; i <= n; i++){ 
        if(answer == "NO"){
            break;
        }
        if(!visited[i]){
            dfs(i);
        }
    }
    console.log(answer==""?"YES":"NO");
}


/*let edges = [];
let visited = [];
let answer = "";

function bfs(index){
    let queue = [];
    queue.push(index);
    visited[index] = 1;
    while(queue.length){
        const next = queue.shift();
        for(let i = 0; i < edges[next].length; i++){
            const temp = edges[next][i];
            if(visited[temp] == visited[next]){
                answer = "NO";
                return;
            }
            if(!visited[temp]){
                queue.push(temp);
                visited[temp] = -1 * visited[next];
            }
        }
    }
}



const readline = require('readline');
 
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function(line) {
    input.push(line)
}).on("close", function() {
    
    for(let i = 0; i < input.length; i++){
        let temp = input.shift();
        let n = +temp.split(" ")[0];
        let m = +temp.split(" ")[1];
        for(let j = 0; j <= n; j++){
            edges[j] = [];
            visited[j] = 0;
        }
        for(let j = 0; j < m; j++){
            let temp = input.shift();
            edges[+temp.split(" ")[0]].push(+temp.split(" ")[1]);
            edges[+temp.split(" ")[1]].push(+temp.split(" ")[0]);
        }  
        
        for(let i = 1; i <= n; i++){ 
            if(!visited[i]){
                bfs(i);
            }
            if(answer == "NO"){
                break;
            }
        }
        console.log(answer==""?"YES":"NO");
        edges = [];
        visited = [];
        answer = "";
    }
  process.exit();
});
*/