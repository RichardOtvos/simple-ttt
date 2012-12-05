var TicTacToe = function(){

    //we have five states: START, PLAYING, P1WON, P2WON, DRAW
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

        //for easy winning checking we overlay the magic square with our board
        $('.play-rect[data-num="0"]').attr('data-magic-value', 8);
        $('.play-rect[data-num="1"]').attr('data-magic-value', 1);
        $('.play-rect[data-num="2"]').attr('data-magic-value', 6);
        $('.play-rect[data-num="3"]').attr('data-magic-value', 3);
        $('.play-rect[data-num="4"]').attr('data-magic-value', 5);
        $('.play-rect[data-num="5"]').attr('data-magic-value', 7);
        $('.play-rect[data-num="6"]').attr('data-magic-value', 4);
        $('.play-rect[data-num="7"]').attr('data-magic-value', 9);
        $('.play-rect[data-num="8"]').attr('data-magic-value', 2);
    }


    //we use this function to show all of the possible ends
    function initEndScreen(){
        $gameBoard.empty();
        $gameBoard.removeClass().addClass('endScreen');

        var endText;

        if(gameState == "P1WON"){
            endText = "Player 1 won!";
        }
        else if(gameState == "P2WON"){
            endText = "Player 2 won!";
        }
        else{
            endText = "Draw!";
        }

        $("<h1 class='endText'>" + endText + "</h1>").appendTo( $gameBoard );
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
        var playerClass = (playerTurn === 1 ) ?  '.player2' : '.player1';


        //we put the player's signed rect's magic-value to the array
        var playedRects = [];

        $(playerClass).each(function(){
            playedRects.push( parseInt($(this).data('magic-value')) );
        });

        //we add all of the magic-values
        var result = playedRects.reduce(function(prev, value){
            return prev+value;
        });

        //if the result is 15 then, the player won
        if(result === 15 ){
            gameState = (playerTurn === 1 ) ?  'P2WON' : 'P1WON';
            updateDisplay();
            return
        }

        //if we have no empty rects ( and no one won so far ), the game is a draw
        if( $('.empty').length === 0){
            gameState = "DRAW";
            updateDisplay();
        }
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
        else{
            initEndScreen();
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