document.addEventListener('DOMContentLoaded', function () {

    // Initialize variables

    var scores, roundScore, activePlayer, gamePlaying;

    // Initialize game

    init();

    // Event listener for roll dice button

    document.querySelector('.btn--roll').addEventListener('click', function () {

        if (gamePlaying) {

            // Generate random dice roll

            var dice = Math.floor(Math.random() * 6) + 1;

            // Display the result

            var diceDOM = document.querySelector('.dice');

            diceDOM.style.display = 'block';

            diceDOM.src = 'dice-' + dice + '.png';

            // Update round score IF the rolled number was NOT a 1

            if (dice !== 1) {

                // Add score

                roundScore += dice;

                document.querySelector('#current--' + activePlayer).textContent = roundScore;

            } else {

                // Next player

                nextPlayer();

            }

        }

    });

    // Event listener for hold button

    document.querySelector('.btn--hold').addEventListener('click', function () {

        if (gamePlaying) {

            // Add current score to global score

            scores[activePlayer] += roundScore;

            // Update the UI

            document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];

            // Check if player won the game

            if (scores[activePlayer] >= 100) {

                document.querySelector('#name--' + activePlayer).textContent = 'Winner!';

                document.querySelector('.dice').style.display = 'none';

                document.querySelector('.player--' + activePlayer).classList.add('player--winner');

                document.querySelector('.player--' + activePlayer).classList.remove('player--active');

                gamePlaying = false;

            } else {

                // Next player

                nextPlayer();

            }

        }

    });

    // Event listener for new game button

    document.querySelector('.btn--new').addEventListener('click', init);

    // Function to initialize the game

    function init() {

        scores = [0, 0];

        roundScore = 0;

        activePlayer = 0;

        gamePlaying = true;

        document.querySelector('.dice').style.display = 'none';

        document.getElementById('score--0').textContent = '0';

        document.getElementById('score--1').textContent = '0';

        document.getElementById('current--0').textContent = '0';

        document.getElementById('current--1').textContent = '0';

        document.getElementById('name--0').textContent = 'Player 1';

        document.getElementById('name--1').textContent = 'Player 2';

        document.querySelector('.player--0').classList.remove('player--winner');

        document.querySelector('.player--1').classList.remove('player--winner');

        document.querySelector('.player--0').classList.remove('player--active');

        document.querySelector('.player--1').classList.remove('player--active');

        document.querySelector('.player--0').classList.add('player--active');

    }

    // Function to switch to the next player

    function nextPlayer() {

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        roundScore = 0;

        document.getElementById('current--0').textContent = '0';

        document.getElementById('current--1').textContent = '0';

        document.querySelector('.player--0').classList.toggle('player--active');

        document.querySelector('.player--1').classList.toggle('player--active');

        document.querySelector('.dice').style.display = 'none';

    }

});
