export class View{
    constructor(startBoard){
        this.initTable(startBoard)
        this.initResetButton()
    }

    
    bindOnBlockClickCallBack(callBack){
        this.callBackOnBlockClick = callBack
    }

    bindOnResetClickCallBask(callback){
        this.callBackOnResetClick = callback
    }

    initTable(boardDTO){

        console.log('[VIEW]', 'initializing board', boardDTO)

        const {flatBoard: board, boardSize: size} = boardDTO
        
        let table = document.createElement('table');

        for(let row = 0; row < size; row ++){
            let tr = document.createElement('tr');

            for(let col = 0; col < size; col++){
                // ASSUMPTION: board contains the data to show
                //FIXME: make if so that the board is an array of elements an I could add them raw, like so it woldn't be coulpled
                let currRow = row;
                let currCol = col;
                let tdText = document.createTextNode(`${ board[row * size + col] }`);
                let td = document.createElement('td');
                td.appendChild(tdText);
                td.addEventListener('click', () => {this.onBlockClick(currCol, currRow)});
                td.style.width = 25;
                td.style.height = 25;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        table.setAttribute('id', 'gameTable');
        document.body.appendChild(table);
    }

    initResetButton(){
        let btn = document.createElement("button");
        btn.innerHTML = "Reset Board";
        btn.id = 'resetBoard'
        btn.addEventListener('click', () => {this.onResetClick()})
        document.body.appendChild(btn);
    }


    updateBoard(newBoardDTO){
        const {flatBoard: newBoard, boardSize: newSize, win: win} = newBoardDTO
        let table = document.getElementById('gameTable');
        for(let row = 0; row < newSize; row ++){
            let tr = table.getElementsByTagName('tr')[row]

            for(let col = 0; col < newSize; col++){
                // ASSUMPTION: board contains the data to show
                let tdText = document.createTextNode(`${ newBoard[row * newSize + col] }`);
                let td = tr.getElementsByTagName('td')[col]

                td.replaceChildren(tdText)
            }
        }

        if (win){
            alert("You won the game, Press the reset button to reset the game")
        }
    }


    onBlockClick(x, y){
        this.callBackOnBlockClick(x, y);
    }

    onResetClick(){
        this.callBackOnResetClick();
    }

}
