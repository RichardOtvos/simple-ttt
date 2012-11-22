var TicTacToe = function(){

    //we have three states: START, PLAYING, END
    var gameState = "START";

    var $gameBoard = $('#board');

    //display start screen
    function initStartScreen(){

        //formats the board to the start screen
        $gameBoard.addClass('startScreen');

        //adds the game title
        $('<h1>Tic-Tac-Toe</h1>').addClass('gameTitle')
            .appendTo($gameBoard);

        //adds the Play button
        $('<div><button type="button">Play!</button></div>').addClass('playButton')
            .appendTo($gameBoard)
            .click(function(){
                gameState = 'PLAYING';
                updateDisplay();
            });


    }

    //updates the game display
    function updateDisplay(){
        if (gameState === "START"){
            initStartScreen();
        }
        else if (gameState === "PLAYING"){
            console.log('playing');
        }
    }

    //initializes and starts the whole game
    function startGame(){
        updateDisplay();
    }

    return{
        startGame: startGame
    }
}();

TicTacToe.startGame();