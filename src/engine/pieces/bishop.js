import Piece from './piece';
import Player from '../player';
import Square from '../square';


export default class Bishop extends Piece {
    constructor(player) {
        super(player);
        // this.vectors = [(1, 1), (-1, 1)];
        // this.oneMove = false;
    }

    getAvailableMoves(board) {
        let currentSquare = board.findPiece(this);
        let availableSquareList =[];

        let row, col;

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

              //ANOTHER METHOD FOR DOING THE ABOVE LOOP
              // row = currentSquare.row + 8 ;
              // col = currentSquare.col - 8;
              //
              // for ( let i = 0; i < 18; i++ ) {
              //   row = row - 1;
              //   col = col + 1;
              //   if (( 0 <= row && row <= 7) && ( 0 <= col && col <= 7)) { availableSquareList.push(new Square(row,col)) }
              // }

        //Remove currentSquare
        let filteredAvailableSquareList = availableSquareList.filter( square => { return !square.equals(currentSquare)})
        return filteredAvailableSquareList;
    }
}
