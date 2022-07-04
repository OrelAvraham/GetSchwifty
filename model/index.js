import BoardOrchestrator, * as model from './model.js'
import  * as validations from './ValidationStrategies/strats.js'
import * as generators from './BoradDTOGenerators/generators.js'

let validationStrat = new validations.ValidationStrategy();
let boardDTOGenerator = new generators.BoardDTOGenerator();

let LogBoardStart = function(boardDTO){
    console.log('[GENERAL]', boardDTO)
}

let aleftInit = function(boardDTO){
    alert("back from ctor")
}

let boardOrch = new BoardOrchestrator(validationStrat, boardDTOGenerator, LogBoardStart, LogBoardStart)
boardOrch.swap(0,0);


while(true){
    let locs = prompt('Enter x y').split(' ');
    let x = parseInt(locs[0]);
    let y = parseInt(locs[1]);
    console.log(`Got from user (${x}, ${y})`)
    boardOrch.swap(x, y);
    
    
}