import * as Boards from './Board'

class BoardOrchestrator{
    constructor(validationStrategy){
        this.validationStrategy = validationStrategy
        this.board = new Boards.Board()

        while(!this.validationStrategy.validate(this.board)){
            this.board.resetBoard();
        }
    }

    swap(x, y){
        let emptyLoc = this.board.getEmptyBlockLoc();
        let emptyX = emptyLoc.row;
        let emptyY = emptyLoc.col;
        let dist = Math.sqrt(Math.pow(x - emptyX, 2) + Math.pow(y - emptyY, 2));
        if(dist <= 1){
            let emptyBlock = this.board.get(emptyX, emptyY);
            let blockToSwap = this.board.get(x, y)
            this.board.set(emptyX, emptyY, blockToSwap);
            this.board.set(x, y, emptyBlock);
        }
    }

    _getNeighbours(x, y){
        up = this.board.get(x, y - 1);
        down = this.board.get(x, y + 1);
        left = this.board.get(x - 1, y);
        right = this.board.get(x + 1, y);
        let neighbours = [up, down, left, right];
        return neighbours.filter(block => block != undefined);
    }
    


    

}