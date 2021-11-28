const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let n = +input.shift();
let child = [];
let dict = {};
let flag = Array(n).fill(0);
for(let i = 0; i < n; i++){
    child[i] = [];
    child[i].push(...input[i].split(" "));
    dict[child[i][0]] = i;
}
let answer = [];
let maxLevel = 0;
function inorder(node, level){
    if(level > maxLevel){
        maxLevel = level;
    }
    if(child[node][1] != '-1'){
        inorder(dict[child[node][1]], level + 1);
    }
    answer.push(level);
    if(child[node][2] != '-1'){
        inorder(dict[child[node][2]], level + 1);
    }
}
function findRoot(){
    for(let i = 0; i < n; i++){
        child[i].forEach((elem, idx) => {
            if(idx != 0){
                if(elem != -1){
                    flag[elem-1] = 1;
                }
            }
        });
    }
    return flag.indexOf(0);
}
inorder(dict[findRoot() + 1], 1);
let output = "";
let maxWidth = 0;
for(let i = 1; i <= maxLevel; i++){
    const left = answer.indexOf(i);
    const right = answer.lastIndexOf(i);
    if(right - left + 1 > maxWidth){
        maxWidth = right - left + 1;
        output = i + " " + maxWidth;
    }
}
console.log(output);