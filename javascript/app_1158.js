function solution(testCase){
    const N = +testCase.split(" ")[0];
    const K = +testCase.split(" ")[1];
    const answer = [];
    const temp = Array.from({length: N}, (v, i) => i+1);
    let count = 1;
    while(temp.length > 0){
        if(count % K != 0){
            const t = temp.shift();
            temp.push(t);
            count++;
        } else {
            answer.push(temp.shift());
            count = 1;
        }
    }
    console.log(`<${answer.join(", ")}>`);
}
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let data = [];
rl.on('line', function (line) {
  data.push(line);
  // data = line.split('').map((el) => el);
  // data = line.split(' ').map((el) => el);
  // data = line.split('').map((el) => +el);
  rl.close();
}).on('close', function () {
  
    solution(data[0]);
  process.exit();
});