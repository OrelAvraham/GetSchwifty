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
        if(0 <= x < this.boardSize && 0 <= y < this.boardSize){
            let flatIdx = y * this.boardSize + x;
            return this.board[flatIdx];
        }
        return undefined

    }

    set(x, y, block){
        if(0 <= x < this.boardSize && 0 <= y < this.boardSize){
            let flatIdx = y * this.boardSize + x;
            this.board[flatIdx] = block;
        }
        throw `Index Out of Range. Cannot get ${(x, y)} in ${this.boardSize, this.boardSize} board`;
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

    getEmptyBlockLoc(){
        for(let i = 0; i < this.boardSize - 1; i++){
            if(this.board[i].type === Blocks.BlockTypes.Empty){
                return {row: i % this.boardSize, col: Math.floor(i / this.boardSize)}
            }
        }
        return undefined
    }

}