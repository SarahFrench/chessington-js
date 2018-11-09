import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Rook extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableSquares = [];


        //Horizontally (fixed col)
        for (let i = 0; i < 8; i++){
          availableSquares.push(new Square(i,currentSquare.col))
        }
        //Vertically (fixed col)
        for (let i = 0; i < 8; i++){
          availableSquares.push(new Square(currentSquare.row, i))
        }

        //Remove currentSquare
        let filteredAvailableSquares = availableSquares.filter( square => { return ((square.col !== currentSquare.col) || (square.row !== currentSquare.row))})


        return filteredAvailableSquares;
    }
}
