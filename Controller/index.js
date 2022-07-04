import  * as model from '../model/model.js'
import  * as validations from '../model/ValidationStrategies/strats.js'
import * as generators from '../model/BoradDTOGenerators/generators.js'
import * as views from '../view/view.js'

//Bootstrap

let validationStrat = new validations.ValidationStrategy();
let boardDTOGenerator = new generators.BoardDTOGenerator();
let boardOrch = new model.BoardOrchestrator(validationStrat, boardDTOGenerator);

let view = new views.View();


let currentPlayer;

let leaderBoardDTO = []

function bindStartToSetBoard(startData){
    let boardSize = startData.boardSize;
    boardOrch.setBoard(boardSize);



    if(currentPlayer){
        let name = currentPlayer.name;
        let size = currentPlayer.size;

        let day = player.startTime.getDate();
        let month = player.startTime.getMonth() + 1;
        let year = player.startTime.getFullYear(); 

        let date = `${day}-${month}-${year}`;
        let duration = new Date() - player.startTime

        leaderBoardDTO.push({name:name, size:size, date:date, duration:duration})

        view.drawLeaderBoard(leaderBoardDTO);
    }

    

    const now = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear()
    
    let startTime = `${day}-${month}-${year}`;
    
    currentPlayer = {name: startData.name, size: boardSize, startTime:startTime}
    
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
