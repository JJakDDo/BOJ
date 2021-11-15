const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
const N = input.shift();

const maxCandy = (x, y, board) => {
    let max = 0;
    let cnt = 0;
    let cx = x-1;
    let cy = y-1;
    while(cx >= 0){
        if(board[cx][y] == board[x][y]){
            cnt++;
            cx--;
        } else {
            break;
        }
    }
    cx = x+1;
    while(cx < board.length){
        if(board[cx][y] == board[x][y]){
            cnt++;
            cx++;
        } else {
            break;
        }
    }
    max = Math.max(cnt + 1, max);
    cnt = 0;
    while(cy >= 0){
        if(board[x][cy] == board[x][y]){
            cnt++;
            cy--;
        } else {
            break;
        }
    }
    cy = y+1;
    while(cy < board.length){
        if(board[x][cy] == board[x][y]){
            cnt++;
            cy++;
        } else {
            break;
        }
    }
    max = Math.max(cnt + 1, max);
    return max;
};

const swap = (i, j, board) => {

};

function solution(n, testCase){
    let answer = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            let max = 0;
            let temp = testCase[i][j];
            if(i+1 < n){
                testCase[i][j] = testCase[i+1][j];
                testCase[i+1][j] = temp;
                max = Math.max(maxCandy(i,j,testCase), max);
                temp = testCase[i][j];
                testCase[i][j] = testCase[i+1][j];
                testCase[i+1][j] = temp;
            }
            temp = testCase[i][j];
            if(i-1 >= 0){
                testCase[i][j] = testCase[i-1][j];
                testCase[i-1][j] = temp;
                max = Math.max(maxCandy(i,j,testCase), max);
                temp = testCase[i][j];
                testCase[i][j] = testCase[i-1][j];
                testCase[i-1][j] = temp;
            }
            temp = testCase[i][j];
            if(j+1 < n){
                testCase[i][j] = testCase[i][j+1];
                testCase[i][j+1] = temp;
                max = Math.max(maxCandy(i,j,testCase), max);
                temp = testCase[i][j];
                testCase[i][j] = testCase[i][j+1];
                testCase[i][j+1] = temp;
            }
            temp = testCase[i][j];
            if(j-1 >= 0){
                testCase[i][j] = testCase[i][j-1];
                testCase[i][j-1] = temp;
                max = Math.max(maxCandy(i,j,testCase), max);
                temp = testCase[i][j];
                testCase[i][j] = testCase[i][j-1];
                testCase[i][j-1] = temp;
            }
            answer = Math.max(answer, max);
        }
        if(answer == n){
            break;
        }
    }
    console.log(answer);
}
solution(N, input.map(el => el.split("")));