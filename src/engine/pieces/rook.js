import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableSquareList = [];


        //Horizontally (fixed col)
        for (let i = 0; i < 8; i++){
          availableSquareList.push(new Square(i,currentSquare.col))
        }
        //Vertically (fixed col)
        for (let i = 0; i < 8; i++){
          availableSquareList.push(new Square(currentSquare.row, i))
        }

        //Remove currentSquare
        let filteredAvailableSquareList = availableSquareList.filter( square => { return !square.equals(currentSquare)})
        return filteredAvailableSquareList;
    }
}
