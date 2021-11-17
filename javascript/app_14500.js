function solution(n, m, board){
    let max = 0;
    for(let i = 0; i < n; i++){
        for(let j = 0; j < m; j++){
            if(i + 3 < n){
                max = Math.max(board[i][j]+board[i+1][j]+board[i+2][j]+board[i+3][j], max);
            }

            if(i + 2 < n){
                if(j + 1 < m){
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+2][j] + board[i+2][j+1], max);
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+1][j+1] + board[i+2][j], max);
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+1][j+1] + board[i+2][j+1], max);
                    max = Math.max(board[i][j+1] + board[i][j] + board[i+1][j] + board[i+2][j], max);
                }
                if(j - 1 >= 0){
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+2][j] + board[i+2][j-1], max);
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+1][j-1] + board[i+2][j], max);
                    max = Math.max(board[i][j] + board[i+1][j] + board[i+1][j-1] + board[i+2][j-1], max);
                    max = Math.max(board[i][j-1] + board[i][j] + board[i+1][j] + board[i+2][j], max);
                }
            }

            if(i + 1 < n){
                if(j + 1 < m){
                    max = Math.max(board[i][j] + board[i+1][j] + board[i][j+1] + board[i+1][j+1], max);
                }
                if(j - 1 >= 0){
                    max = Math.max(board[i][j] + board[i+1][j] + board[i][j-1] + board[i+1][j-1], max);
                }
            }

            if(j + 3 < m){
                max = Math.max(board[i][j]+board[i][j+1]+board[i][j+2]+board[i][j+3], max);
            }


            if(j + 2 < m){
                if(i + 1 < n){
                    max = Math.max(board[i][j] + board[i][j+1] + board[i][j+2] + board[i+1][j+2], max);
                    max = Math.max(board[i][j] + board[i][j+1] + board[i+1][j+1] + board[i][j+2], max);
                    max = Math.max(board[i][j] + board[i][j+1] + board[i+1][j+1] + board[i+1][j+2], max);
                    max = Math.max(board[i+1][j] + board[i][j] + board[i][j+1] + board[i][j+2], max);
                }
                if(i - 1 >= 0){
                    max = Math.max(board[i][j] + board[i][j+1] + board[i][j+2] + board[i-1][j+2], max);
                    max = Math.max(board[i][j] + board[i][j+1] + board[i-1][j+1] + board[i][j+2], max);
                    max = Math.max(board[i][j] + board[i][j+1] + board[i-1][j+1] + board[i-1][j+2], max);
                    max = Math.max(board[i-1][j] + board[i][j] + board[i][j+1] + board[i][j+2], max);
                }
            }
        }
    }
    console.log(max);
}

const { POINT_CONVERSION_COMPRESSED } = require('constants');
const { FORMERR } = require('dns');
const fs = require('fs');
let input = fs.readFileSync('./input.txt').toString().replace(/\r\n/g,'\n').split('\n');
let N = input[0].split(" ")[0];
let M = input[0].split(" ")[1];
let inputBoard = [];
for(let i = 0; i < N; i++){
    let row = input[i+1].split(" ");
    inputBoard[i] = [];
    for(let j = 0; j < M; j++){
        inputBoard[i][j] = +row[j];
    }
}
solution(N, M, inputBoard);