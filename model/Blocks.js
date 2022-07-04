export const BlockTypes = {
    Empty: 0,
    Numeric: 1
}

export class Block{
    constructor(blockType){
        this.type = blockType
    }

    describe(){
        return ''
    }

}

export class NumericBlock extends Block{
    constructor(value){
        super(BlockTypes.Numeric)
        this.num = value;
    }

    describe(){
        return this.num
    }
}