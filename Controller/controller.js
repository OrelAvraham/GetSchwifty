export class Controller{
    constructor(view, model){
        this.view = view;
        this.boardOrch = model;
        
        console.log(this.boardOrch)


    }

    bindAll(){
        console.log(this.boardOrch)
        this.view.bindOnClickCallBack(this.bindOnClickToSwap);
        this.boardOrch.bindOnSwapCallBack(this.bindSwapToUpdatDraw);
    }

    bindOnClickToSwap(x, y){
        console.log('tryna swap but cant bcs undefined', this.boardOrch)
        this.boardOrch.swap(x,y);
    }
    
    bindSwapToUpdatDraw(boardDTO){
        this.view.updateBoard(boardDTO);
    }
    

}