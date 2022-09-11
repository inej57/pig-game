'use strict';
//selecting element
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
//this one is for desgin
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--0');
//img
const dicEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//starting condition
let score, currentScore, activePlayer, playing;
const init = function () {
  score = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  //scores equalls to 0
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //change background colo to it default color
  dicEl.classList.add('hidden');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
  // player0El.classList.add('player--active');
  //player1El.classList.remove('player--active');
};
init();
// swiching players
const swichPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  currentScore = 0;
  // player0El.classList.toggle('player--active');
  // player1El.classList.toggle('player--active');
};

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    //generation dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);

    //displaying dice roll
    dicEl.classList.remove('hidden');
    dicEl.src = `dice-${dice}.png`;
    //checking for 1:
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //swich player
      swichPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1 hold the score of current num;
    score[activePlayer] += currentScore;

    document.getElementById(`score--${activePlayer}`).textContent =
      score[activePlayer];
    //swich players if score<100
    if (score[activePlayer] >= 50) {
      //ending the game
      playing = false;
      dicEl.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //swiching user
      swichPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
