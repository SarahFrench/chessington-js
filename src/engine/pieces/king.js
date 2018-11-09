import Piece from './piece';
import Player from '../player';
import Square from '../square';

export default class King extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) {
      let currentSquare = board.findPiece(this);
      let availableSquareList =[];

      let row, col;
      //Vectors - up-down = (row+1, col+0),
      //Vectors - lateral = (row+0, col+1)
      //Vectors - diagonal = (row+1, col-1) (row-1, col+1)

      let vectors = [[+1,0],[0,+1],[+1,+1],[-1,+1]];

      vectors.forEach( vector => {
        for ( let i = -1; i < 2; i++ ) { //always adding i, which takes on -+ values
          row = currentSquare.row + vector[0]*i;
          col = currentSquare.col + vector[1]*i;
          if (i !== 0) { availableSquareList.push(new Square(row,col)) }
        }
      })

      return availableSquareList;


    }
}
