const button = document.querySelector("#button")
console.log(button);

function handleClick() {
    const ticker = document.querySelector('#ticker');
    console.log(ticker);
    console.log("stock ticker is", ticker.textContent);
}

button.addEventListener("click", handleClick);

const clickCounter = document.querySelector('#click-counter');
console.log(clickCounter);

clickCounter.addEventListener("click", () => {
    const currentCount = parseInt(clickCounter.textContent);
    clickCounter.textContent = currentCount + 1;
})

document.querySelector("h1").addEventListener("mouseover", () => {
    console.log("mouseover");
    document.querySelector("h1").style.color = "red";
})

document.querySelector("h1").addEventListener("mouseout", () => {
    console.log("mouseout");
    document.querySelector("h1").style.color = "black";
})


