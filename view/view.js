export class View{
    constructor(){
        this.initializedBoard = false;
        this.createStartButton();
    }

    //Bind
    bindClickCallBack(callBack){
        this.callBackClick = callBack
    }

    bindStartCallBack(callback){
        this.callBackStart = callback
    }

    // Utils

    createStartButton(){
        let btn = document.createElement("button");
        btn.innerText = "Start Game";
        btn.addEventListener('click',() => {this.onStartClick()})
        document.body.appendChild(btn); 
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

        this.initLeaderBoard()
    }

    removeTable(){
        document.getElementById('gameTable').remove();
    }


    initLeaderBoard(){


        var leaderBoard = document.createElement('table');
        leaderBoard.setAttribute('id', 'leaderBoard');

        let titleRow = leaderBoard.insertRow(-1);
        
        let uName = titleRow.insertCell(0);
        uName.appendChild(document.createTextNode('Name'));

        let size = titleRow.insertCell(1);
        size.appendChild(document.createTextNode('Board Size'));

        let date = titleRow.insertCell(2);
        date.appendChild(document.createTextNode('Date'));

        let timePlayed = titleRow.insertCell(3);
        timePlayed.appendChild(document.createTextNode('Duratoin (ms)'));

        document.body.appendChild(leaderBoard);

    }


    //API (?)

    onBlockClick(x, y){
        this.callBackClick(x, y);
    }

    onStartClick(){
        if(!this.initializedBoard){
            //FIXME: learn how to use forms and stop using prompt
            let uName = prompt('Enter your name');
            let size = parseInt(prompt('Enter the wanted board size'));
            //FIXME: use two callbacks, one to the board size and one for the user data (for 2 Models)
            this.callBackStart({name: uName, boardSize: size});
        }
    }

    drawBoard(newBoardDTO){
        console.log('[VIEW]', 'given board to draw', newBoardDTO)
        if(!this.initializedBoard){
            this.initTable(newBoardDTO);
            this.initializedBoard = true;
        }
        else{
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

            if (newBoardDTO.win & this.initializedBoard){
                alert("You won the game, Press the reset button to reset the game")
                this.initializedBoard = false;
                this.removeTable();
                this.onStartClick()
            }
        }
    }

    drawLeaderBoard(leaderBoardDTO){
        document.getElementById('leaderBoard').remove()
        this.initLeaderBoard();
        let newTable = document.getElementById('leaderBoard')
        leaderBoard.replaceChild()
        for(let i = 0; i < leaderBoardDTO.length; i ++){
            let row = leaderBoard.insertRow(-1);
            let player = leaderBoardDTO[i];
            let name = player.name;
            let size = player.size;
            let date = player.date;
            let duration = player.duration;

            row.insertCell(0);

            let nameCell = titleRow.insertCell(0);
            nameCell.appendChild(document.createTextNode(name));
    
            let sizeCell = titleRow.insertCell(1);
            sizeCell.appendChild(document.createTextNode(size));
    
            let dateCell = titleRow.insertCell(2);
            dateCell.appendChild(document.createTextNode(date));
    
            let duratoinCell = titleRow.insertCell(3);
            duratoinCell.appendChild(document.createTextNode(duration));

            
        }
        text = document.createTextNode("Leader Board feature still does not exists")
    }


}
