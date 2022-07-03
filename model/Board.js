import * as Blocks from "./Blocks"

export class Board{
    constructor(boardSize = 3){
        this.boardSize = boardSize;
        this.board = this.resetBoard()
    }

    resetBoard(){

        let flatBoard = [new Block(BlockTypes.Empty)];

        for(i = 1; i < this.boardSize*this.boardSize; i++){
            flatBoard.push(new NumericBlock(i));
        }

        flatBoard = flatBoard.sort(() => {
            const randomBool = Math.random() > 0.5;
            return randomBool ? 1 : -1;
        })

        this.board = flatBoard;
    }

    get(x, y){
        let flatIdx = y * this.boardSize + x;
        return this.board[flatIdx];
    }

    set(x, y, block){
        let flatIdx = y * this.boardSize + x;
        this.board[flatIdx] = block;
    }

    countFlips(){
        let flipCount = 0;
        for(let i = 0; i < this.boardSize - 1; i++){
            let currBlock = this.board[i];
            for(let j = i; j < this.boardSize; j++){
                let nextBlock = this.board[j];
                if(currBlock.num > nextBlock.num){
                    flipCount++;
                }
            }
        }
        return flipCount;
    }

}