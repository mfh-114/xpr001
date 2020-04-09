export class GameAsset{
    
    private name:String;
    private row:Int16Array;
    private col:Int16Array;

    getName(){
        return this.name;
    }

    setName(name:String){
        this.name = name;
    }

    getRow(){
        return this.row;
    }

    setRow(row:Int16Array){
        this.row = row;
    }

    getCol(){
        return this.col;
    }

    setCol(col:Int16Array){
        this.col = col;
    }

    toString(){
        return this.name+", "+this.row+", "+this.col;
    }
}