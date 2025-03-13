const p1 = {
  score: 0,
  button: document.getElementById("p1Button"),
  display: document.getElementById("p1Display"),
};

const p2 = {
  score: 0,
  button: document.getElementById("p2Button"),
  display: document.getElementById("p2Display"),
};

const resetBtn = document.getElementById("reset");
const winningScoreSelect = document.getElementById("playto");

let winningScore = 3;

let gameOver = false;

function updateScore(player, opponent) {
  if (!gameOver) {
    player.score++;
    if (player.score === winningScore) {
      gameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      player.button.disabled = true;
      opponent.button.disabled = true;
    }
    player.display.textContent = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

resetBtn.addEventListener("click", reset);

function reset() {
  for (let p of [p1, p2]) {
    p.display.textContent = p.score = 0;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }

  gameOver = false;
}

winningScoreSelect.addEventListener("change", function () {
  console.log(this.value);

  winningScore = parseInt(this.value);
  reset();
});
