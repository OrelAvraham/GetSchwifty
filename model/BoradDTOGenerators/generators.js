import { BlockTypes } from "../Blocks.js";

export class BoardDTOGenerator{
    getBoardDTO(board){
        
        let blocksArray = board.board;

        let boardData = blocksArray.map(block => block.describe()); // basic generation basec on the blocls description

        return {flatBoard: boardData, boardSize: board.boardSize, win:this._checkWin(boardData)}
    }

    _checkWin(boardData){
        // when flatenning the board a winning state is when all the numbers are in 
        //an ascending order and at the end there is an empty block
        if(boardData[boardData.length - 1] === ''){
            for(let i = 1; i < boardData.length- 1 ; i++){
                if(boardData[i] < boardData[i-1]){
                    return false;
                }
            }
            
            return true;
        }
        return false;



    }

}