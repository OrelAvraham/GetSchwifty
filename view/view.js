class View{
    constructor(callBackOnClick, startBoard){
        this.callBackOnClick = callBackOnClick
        this.initTable(startBoard)
    }

    


    initTable(boardDTO){
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
                td.addEventListener('click', () => {this.onClick(currCol, currRow)});
                td.style.width = 25;
                td.style.height = 25;
                tr.appendChild(td);
            }
            table.appendChild(tr);
        }
        
        table.setAttribute('id', 'gameTable');
        document.body.appendChild(table);
    }

    updateBoard(newBoardDTO){
        console.log(newBoardDTO)
        const {flatBoard: newBoard, boardSize: newSize} = newBoardDTO
        let table = document.getElementById('gameTable');
        console.log('update board log (new board)', newBoard)
        for(let row = 0; row < newSize; row ++){
            let tr = table.getElementsByTagName('tr')[row]

            for(let col = 0; col < newSize; col++){
                // ASSUMPTION: board contains the data to show
                let tdText = document.createTextNode(`${ newBoard[row * newSize + col] }`);
                let td = tr.getElementsByTagName('td')[col]

                console.log('update board log (new td)', td)
                td.replaceChildren(tdText)
            }
        }
    }


    onClick(x, y){
        this.callBackOnClick(x, y);
    }

}

cb = function(x, y){
    alert(`${x} ${y}`);
}

board = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
size = 4

let boardDTO = {flatBoard: board, boardSize: size}


let v = new View(cb, boardDTO);

shuffle = function(){
    let newBoardboard = board.sort(()=> {
        const randomTrueOrFalse = Math.random() > 0.5;
        return randomTrueOrFalse ? 1 : -1
    })
    console.log('Shuffle Log', newBoardboard)
    let newboardDTO = {flatBoard: newBoardboard, boardSize: size}

    v.updateBoard(newboardDTO)
}

let btn = document.createElement("button");
btn.innerHTML = "Click Me";
document.body.appendChild(btn);
btn.addEventListener('click', () => shuffle())

