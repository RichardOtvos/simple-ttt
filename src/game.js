var TicTacToe = function(){

    //we have three states: START, PLAYING, END
    var gameState = "START";

    //player1 - 1 | player2 - -1
    var playerTurn = '1';

    //the class to apply to the rects
    var currentClass = 'player1';

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

        //we create a rect that shows who's turn is it
        $('<div id="turn-sign" class="player1"></div>').appendTo($gameBoard);

        //we create the rectangles where you can put your mark
        for(var i=0; i<9; i++){
            $("<div class='play-rect empty'></div>").appendTo($('.playingfield'))
                .attr('data-num', i);
        }
    }

    //the gameloop
    function gameLoop(){

        $('.empty').one('click', function(){

            if (playerTurn === 1){
                currentClass = 'player1';
            }else if (playerTurn === -1){
                currentClass = 'player2';
            }

            updateTurnSign();
            $(this).removeClass('empty').addClass(currentClass);

            playerTurn *= -1;

            checkWinningCondition();
            
        });

    }

    //checks who won
    function checkWinningCondition(){

    }

    //updates the turn display
    function updateTurnSign(){
        var nextTurn = 'player2';
        if (playerTurn === 1){
                nextTurn = 'player2';
        }else if (playerTurn === -1){
                nextTurn = 'player1';
        }
        $('#turn-sign').removeClass().addClass(nextTurn);
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