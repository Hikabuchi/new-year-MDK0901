$(document).ready(function() {
    $('#start-button').on('click', function() {
        startGame();
    });

    $('#exit-button').on('click', function() {
        exitGame();
    });

    function startGame() {
        // Logic to start the game goes here
        alert("Game started! Let's play.");
        // For now, just an alert. You can replace this with your game logic.
    }

    function exitGame() {
        if (confirm("Are you sure you want to exit?")) {
            window.close();
        }
    }
});
