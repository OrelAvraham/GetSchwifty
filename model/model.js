import * as Boards from './Board.js'

export class BoardOrchestrator{
    constructor(validationStrategy, boardDTOGenerator){
        this.validationStrategy = validationStrategy
        this.board = new Boards.Board()
        this.boardDTOGenerator = boardDTOGenerator;

        while(!this.validationStrategy.validate(this.board)){
            this.board.resetBoard();
        }

    }

    bindOnBoardUpdate(callBack){
        this.updateBoardCallBack = callBack
    }
    
    getBoardDTO(){
        return this.boardDTOGenerator.getBoardDTO(this.board);
    }

    swap(x, y){
        let emptyLoc = this.board.getEmptyBlockLoc(); // maybe use a more generic method that returns all blocks from a type, might be a better idea
        let emptyX = emptyLoc.row;
        let emptyY = emptyLoc.col;
        let dist = Math.sqrt(Math.pow(x - emptyX, 2) + Math.pow(y - emptyY, 2));
        if(dist <= 1){
            let emptyBlock = this.board.get(emptyX, emptyY);
            let blockToSwap = this.board.get(x, y)

            console.log('[MODEL]', `swapping ${x}, ${y} with ${emptyX}, ${emptyY}`)

            this.board.set(emptyX, emptyY, blockToSwap);
            this.board.set(x, y, emptyBlock);
        }
        
        this.callBackUpdateBoard();
    }

    setBoard(){
        this.board = new Boards.Board();
        while(!this.validationStrategy.validate(this.board)){
            this.board.resetBoard();
        }
        this.callBackUpdateBoard();
    }

    callBackUpdateBoard(){
        this.updateBoardCallBack(this.boardDTOGenerator.getBoardDTO(this.board))
    }

}