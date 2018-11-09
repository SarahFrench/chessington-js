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

      //1 available move to a previously moved Pawn
      if (this.player === Player.WHITE){
        availableSquare.row += 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
      } else if (this.player === Player.BLACK){
        availableSquare.row -= 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
        }

      //2 available moves to an unmoved Pawn
      if ((this.player === Player.WHITE) && (currentSquare.row === 1)){
        availableSquare.row += 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
      } else if ((this.player === Player.BLACK) && (currentSquare.row === 6)){
        availableSquare.row -= 1;
        availableSquareList.push(new Square(availableSquare.row, availableSquare.col));
      }

      return availableSquareList;
}




}
