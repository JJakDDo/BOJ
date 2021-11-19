const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');

let w = [];
let cases = 0;
while(input[cases] != '0'){
    let n = input[cases].split(" ");
    cases++;

    
    solution(n.slice(0,1), n.slice(1));
    if(input[cases] != '0'){
        console.log("");
    }
}

function solution(n, num){
    let index;
    let flag = [];
    const output = [];
    for(let i = 0; i < n; i++){
        flag[i] = 1;
        if(i > 5){
            flag[i] = 0;
        }
    }
    flag.sort((a,b)=>a-b);
    do{
        index = -1;
        output.push(num.filter((e, i) => flag[i] == 1));
        for(let i = n-2; i >= 0; i--){
            if(flag[i] < flag[i+1]){
                index = i;
                break;
            }
        }
        if(index < 0){
            break;
        } else {
            for(let i = n-1; i > index; i--){
                if(flag[i] > flag[index]){                    
                    const temp2 = flag[i];
                    flag[i] = flag[index];
                    flag[index] = temp2;
                    break;
                }
            }
            flag = [...flag.slice(0, index+1), ...flag.slice(index+1).reverse()];
        }
    } while(index >= 0)

    console.log(output.reverse().map(e => e.join(" ")).join("\n"));
}
