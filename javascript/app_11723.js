let n;
function solution(command){
    let bit = "00000000000000000000";
    let c = "";
    let x = 0;
    for(let i = 0; i < n; i++){
        c = command[i].split(" ")[0];
        x = (+command[i].split(" ")[1]) - 1;
        switch(c){
            case "add":
                bit |= (1 << x);
                break;
            case "remove":
                bit &= ~(1 << x);
                break;
            case "check":
                console.log(bit.toString(2).padStart(20, '0').charAt(20 - x - 1));
                break;
            case "toggle":
                bit ^= (1 << x);
                break;
            case "all":
                bit = (1 << 20) - 1;
                break;
            case "empty":
                bit = 0;
                break;
            default:
                break;
        }
    }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on('line', function (line) {
    n = line;
    let commands = [];
    for(let i = 0; i < n; i++){
        commands.push(line);
    }
    rl.close();
}).on('close', function () {
  
    solution(commands);
    process.exit();
});