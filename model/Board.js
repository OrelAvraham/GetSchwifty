import * as Blocks from "./Blocks.js"

export class Board{
    constructor(boardSize = 3){
        this.boardSize = boardSize;
        this.resetBoard()
    }

    resetBoard(){

        let flatBoard = []

        for(let i = 1; i < this.boardSize*this.boardSize; i++){
            flatBoard.push(new Blocks.NumericBlock(i));
        }
        flatBoard.push(new Blocks.Block(Blocks.BlockTypes.Empty))

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
        else{
            throw `Index Out of Range. Cannot get ${x}, ${y} in ${this.boardSize}, ${this.boardSize} board`;
        }
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
        for(let i = 0; i < this.board.length; i++){
            if(this.board[i].describe() === ''){
                return {row: i % this.boardSize, col: Math.floor(i / this.boardSize)}
            }
        }
        return undefined
    }

}