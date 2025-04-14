// const promiseExample = new Promise((resolve, reject) => {
//     console.log("Promise is being created");
//     // console.log(reject);
//     // console.log(resolve);
//     setTimeout(() => {
//         console.log("promise object ->", promiseExample);
//         resolve("Promise is resolved");
//         console.log("promise object ->", promiseExample);
//     }, 1000);
// })

// console.log(promiseExample);

const promiseExample2 = new Promise((resolve, reject) => {
    console.log("Promise is being created");
    setTimeout(() => {
        const success = false; // this is to simulate that something happened successfully or not
        if (success) {
            resolve("Promise is resolved");
        } else {
            reject("Promise is rejected");
        }
    }, 1000);
})

console.log(promiseExample2);


// promiseExample2.then((result) => {
//     console.log("result ->", result); // this is the result of the promise
//     console.log(promiseExample2) // this is just to show that the promise object is resolved
// }).catch((error) => {
//     console.log("error ->", error);
// })

const promiseObj = promiseExample2.then((result) => {
    console.log("result ->", result); // this is the result of the promise
    console.log(promiseExample2) // this is just to show that the promise object is resolved
})
console.log(promiseObj);

// very unsecure way to store api key in the code, use the dotenv package instead
// const finnhubAPIKey = "replace this with your own api key"
// DO NOT SHARE YOUR API KEY WITH ANYONE


const baseUrl = "https://finnhub.io/api/v1"
const quoteEndpoint = "/quote"


function fetchStockPrice(symbol) {
    fetch(`${baseUrl}${quoteEndpoint}?symbol=${symbol}&token=${finnhubApiKey}`)
    .then((response) => {
        console.log("response ->", response);
        // console.log("response.json() ->", response.json());
        return response.json();
    }).then((data) => {
        console.log("data ->", data);

    })
}

fetchStockPrice("AAPL")