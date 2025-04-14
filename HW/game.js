
let bankroll = 2022;
// const wagerInput = bankroll;//document.querySelector('#wager');---make variable
const hidden = document.querySelector("#hidden");


function getBankroll() {
  return bankroll;
}

function setBankroll(newBalance) {
  bankroll = newBalance;
  document.getElementById("bankroll-display").textContent = "$" + bankroll;
  console.log("Current bankroll: ", bankroll);
}

function timeToBet() {
  hidden.actionsSection.classList.add("hidden");
  document.getElementById("playersActions").classList.add("hidden");
  document.getElementById("betting").classList.remove("hidden");
}

function timeToPlay() {
  document.getElementById("betting").classList.add("hidden");
  document.getElementById("playersActions").classList.remove("hidden");
}

function makeWager() {
  const wagerInput = document.getElementById("users-wager");
  const amount = parseInt(wagerInput.value, 10);

  if (!isNaN(amount) && amount > 0 && amount <= bankroll) {
    console.log("Wager:", amount);
    setBankroll(bankroll - amount);
    timeToPlay();
  } else {
    alert("Please enter a valid wager within your bankroll.");
  }
}
// Bind button event after DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("bet-button").addEventListener("click", makeWager);
});
