import Piece from './piece';
import Player from '../../../src/engine/player';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { //currently doesn't allow Pawn to move 2 squares on first move for that piece
      let currentSquare = board.findPiece(this);
      let availableSquare = currentSquare;

      let pieceUnmoved = 0;
      if ((this.player === Player.WHITE) && (currentSquare.row === 2)){
        pieceUnmoved = 1;
      } else if ((this.player === Player.BLACK) && (currentSquare.row === 7)){
        pieceUnmoved = 1;
      }

      let availableSquareList =[];

      for (let i = 1; i <= 1+pieceUnmoved; i++ ){
      if (this.player === Player.WHITE){
        availableSquare.row += 1;
        availableSquareList.push(availableSquare);
      } else if (this.player === Player.BLACK){
        availableSquare.row -= 1;
        availableSquareList.push(availableSquare);
        }
      }
      return availableSquareList;
}
