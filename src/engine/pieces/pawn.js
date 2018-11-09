import Piece from './piece';
import Player from '../../../src/engine/player';


export default class Pawn extends Piece {
    constructor(player) {
        super(player);
    }

    getAvailableMoves(board) { //currently doesn't allow Pawn to move 2 squares on first move for that piece
      let currentSquare = board.findPiece(this);
      let availableSquare = currentSquare;

      if (this.player === Player.WHITE){
        availableSquare.row += 1;
      } else if (this.player === Player.BLACK){
        availableSquare.row -= 1;
      }
      return availableSquare;
      }
}
