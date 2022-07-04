import  * as model from '../model/model.js'
import  * as validations from '../model/ValidationStrategies/strats.js'
import * as generators from '../model/BoradDTOGenerators/generators.js'
import * as views from '../view/view.js'

//Bootstrap

let validationStrat = new validations.ValidationStrategy();
let boardDTOGenerator = new generators.BoardDTOGenerator();
let boardOrch = new model.BoardOrchestrator(validationStrat, boardDTOGenerator);

let view = new views.View();


function bindStartToSetBoard(startData){
    let boardSize = startData.boardSize;
    boardOrch.setBoard(boardSize);
}

function bindClickToSwap(x, y){
    boardOrch.swap(x, y);
}

function bindBoardOrchToDrawBoard(boardDTO){
    view.drawBoard(boardDTO);
}

view.bindStartCallBack(bindStartToSetBoard);
view.bindClickCallBack(bindClickToSwap);

boardOrch.bindOnBoardUpdate(bindBoardOrchToDrawBoard);
