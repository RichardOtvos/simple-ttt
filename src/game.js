var TicTacToe = function(){

    //we have three states: START, PLAYING, END
    var gameState = "START";

    //get the gameboard's in the DOM
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

    //display the play screen
    function initPlayScreen(){
        $gameBoard.empty();
        $gameBoard.removeClass().addClass('playScreen');
        $gameBoard.append($('<div class="playingfield"></div>)'));
    }

    //the gameloop
    function gameLoop(){
        console.log('gameloop');

    }

    //updates the game display
    function updateDisplay(){
        if (gameState === "START"){
            initStartScreen();
        }

        else if (gameState === "PLAYING"){
            if(! $gameBoard.hasClass('playScreen')){
                initPlayScreen();
            }
            gameLoop();
        }
    }

    //initializes and starts the whole game
    function startGame(){
        updateDisplay();
    }

    return{
        startGame: startGame    //starts the game
    };
}();

TicTacToe.startGame();