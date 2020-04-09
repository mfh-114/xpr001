import {GameAsset} from './GameAsset';

class GameGrid {

    private grid:GameAsset[][];

    /***
     * Swap current position to new position
     */
    public swap(currentRow:number, currentCol:number, newRow:number, newCol:number){

    }

    /**
     * Return GameAsset by row and column
     */
    public get(row:number, col:number):GameAsset{
        return null;
    }
 
    /**
     * Set GameAsset into the grid
     * 
     */
    public put(row:number, col:number, gAsset:GameAsset){

    }

    /**
     * Remove GameAsset from the grid. 
     * @param row 
     * @param col 
     */
    public remove(row:number, col:number){

    }

    /**
     * Return String representation of the GameGrid
     */
    public toString():String{
        return null;
    }
}