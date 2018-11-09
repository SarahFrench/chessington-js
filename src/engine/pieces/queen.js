import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Queen extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {

      let currentSquare = board.findPiece(this);
      let availableSquareList = [];
      let row, col;

      //Horizontally (fixed col)
      for (let i = 0; i < 8; i++){
        availableSquareList.push(new Square(i,currentSquare.col))
      }
      //Vertically (fixed col)
      for (let i = 0; i < 8; i++){
        availableSquareList.push(new Square(currentSquare.row, i))
      }

      //Diagonal in positive direction
      for ( let i = -7; i < 8; i++ ) { //always adding i, which takes on -+ values
        row = currentSquare.row + i;
        col = currentSquare.col + i;
        if (( 0 <= row && row <= 7) && ( 0 <= col && col <= 7)) { availableSquareList.push(new Square(row,col)) }
      }

      //Diagonal in negative direction
      for ( let i = -7; i < 8; i++ ) { //always adding i, which takes on -+ values
        row = currentSquare.row - i;
        col = currentSquare.col + i;
        if (( 0 <= row && row <= 7) && ( 0 <= col && col <= 7)) { availableSquareList.push(new Square(row,col)) }
      }

      let filteredAvailableSquareList = availableSquareList.filter( square => { return !square.equals(currentSquare)})
      return filteredAvailableSquareList;
    }
}
