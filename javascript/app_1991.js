const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input.shift();
let child = [];
let dict = {};
for(let i = 0; i < n; i++){
    child[i] = [];
    child[i].push(...input[i].split(" "));
    dict[child[i][0]] = i;
}
let output = [];
let answer = [];

function preorder(node){
    answer.push(child[node][0]);
    if(child[node][1] != '.'){
        preorder(dict[child[node][1]]);
    }
    if(child[node][2] != '.'){
        preorder(dict[child[node][2]]);
    }    
}
function inorder(node){
    if(child[node][1] != '.'){
        inorder(dict[child[node][1]]);
    }
    answer.push(child[node][0]);
    if(child[node][2] != '.'){
        inorder(dict[child[node][2]]);
    }    
}
function postorder(node){
    if(child[node][1] != '.'){
        postorder(dict[child[node][1]]);
    }
    if(child[node][2] != '.'){
        postorder(dict[child[node][2]]);
    }   
    answer.push(child[node][0]);
}
preorder(0);
console.log(answer.join(""));
answer = [];
inorder(0);
console.log(answer.join(""));
answer = [];
postorder(0);
console.log(answer.join(""));
answer = [];