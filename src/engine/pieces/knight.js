import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class Knight extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
      let currentSquare = board.findPiece(this);
      let availableSquareList =[];

      let row, col;
      //Vectors - positive = (row+2, col+1), (row+1, col+2)
      //Vectors - negative = (row-2, col+1), (row-1, col+2)


      let vectors = [[+2,+1],[+1,+2],[-2,+1],[-1,+2]];

      vectors.forEach( vector => {
        for ( let i = -1; i < 2; i++ ) { //always adding i, which takes on -+ values
          row = currentSquare.row + vector[0]*i;
          col = currentSquare.col + vector[1]*i;
          if (( 0 <= row && row <= 7) && ( 0 <= col && col <= 7)) { availableSquareList.push(new Square(row,col)) }
        }
      })


      let filteredAvailableSquareList = availableSquareList.filter( square => { return !square.equals(currentSquare)})
      return filteredAvailableSquareList;
    }
}
