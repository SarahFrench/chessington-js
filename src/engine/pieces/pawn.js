import Piece from './piece';
import Player from '../player';
import Square from '../square';



export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { //currently doesn't allow Pawn to move 2 squares on first move for that piece
      let currentSquare = board.findPiece(this);
      let availableSquare = board.findPiece(this);
      let availableSquareList =[];

      console.log(availableSquare);

      //Previously moved
      if (this.player === Player.WHITE){
        availableSquare.row += 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
        if (currentSquare.row === 1){
          availableSquare.row += 1;
          availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
        }
      } else if (this.player === Player.BLACK){
        availableSquare.row -= 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
        if (currentSquare.row === 6){
          availableSquare.row -= 1;
          availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
        }
        }

      //      if ((this.player === Player.WHITE) && (currentSquare.row === 1)){


      return availableSquareList;
}




}
