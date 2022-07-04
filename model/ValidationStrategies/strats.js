export class VaidationStrategy{
    validate(board){
        if(boardSize % 2 === 0){
            flipCount += board.getEmptyBlockLoc().col;
            return flipCount %2 == 0;
        }
        else{
            return flipCount %2 === 0;
        }
    }
}

// To my knowledge there are no abstract classes in JS, but the idea is that the validation strats will implement ValidationStratety