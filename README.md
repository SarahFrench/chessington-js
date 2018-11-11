
Help about making test/mocha.opt file
https://stackoverflow.com/questions/10753288/how-to-specify-test-directory-for-mocha

Put the below in this file, instead of the instructions to use IntelliJ to modify mocha options
        --compilers js:babel-core/register
        ./tests/**/*.spec.js
        --no-deprecation
        
For this exercise I had to modify the .js file that was named the same as the test file (.spec.js). So tests for the pawn piece in pawn.spec.js required code to be written in pawn.js.

From looking at pawn.js I could see the script defined the pawn pieces in the game, and the Pawn class extends the Piece class. So I look to the pawn.js file to learn more about how pieces are defined. Piece objects are constructed using a player parameter. In player.js I see that players can be either Player.WHITE or Player.BLACK.

The tasks defined by the unit tests wanted to test the logic governing how pieces move on the board. Looking at board.js I saw the function findPiece(), which returns a Square object describing where a piece is on the board. square.js defines Square objects as having row and col properties, which are coordinates within a multidimensional array that makes up the board.

This meant my first steps for finding the available moves for a piece was finding its current position. The getAvailableMoves function needs to return an array of Square objects. These Squares returned in the array are calculated relative to the current position of the piece using currentSquare.row and .col as a starting point to make new Square objects.

You need to generate avialble squares to move into and ensure no repetition, especially including the current square in the avilable squares array.

The most efficient way to solve available moves is to use vectors (for up, down, laterals, diagonals, knight movements) and define if movement is unlimited or 1 step, and add squares to the list of available squares using loops that repeat certain times depending on unlimited/1step.

This moves function can be defined in the piece types js files, or be really efficient and add a function in pieces.js that takes in vector and 'step allowance' parameters, which would be properties of the piece objects.

I didn't get onto the problems where other pieces interfere with available moves to a given piece.
