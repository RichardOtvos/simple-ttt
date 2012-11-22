var TicTacToe = function(){

    //we have three states: START, PLAYING, END
    var gameState = "START";

    //updates the game display
    function updateDisplay(){
        if (gameState === "START"){
            console.log('start');
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