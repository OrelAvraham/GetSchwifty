import  * as model from '../model/model.js'
import  * as validations from '../model/ValidationStrategies/strats.js'
import * as generators from '../model/BoradDTOGenerators/generators.js'
import * as views from '../view/view.js'

//Bootstrap

let validationStrat = new validations.ValidationStrategy();
let boardDTOGenerator = new generators.BoardDTOGenerator();
let boardOrch = new model.BoardOrchestrator(validationStrat, boardDTOGenerator);

let initialBoard = boardOrch.getBoardDTO();

let view = new views.View(initialBoard);


function bindOnClickToSwap(x, y){
    boardOrch.swap(x,y);
}

function bindSwapToUpdatDraw(boardDTO){
    view.updateBoard(boardDTO);
}

function bindResetBoardButton(){
    boardOrch.setBoard();
}

view.bindOnBlockClickCallBack(bindOnClickToSwap);
boardOrch.bindOnBoardUpdate(bindSwapToUpdatDraw);
view.bindOnResetClickCallBask(bindResetBoardButton);