function FancyDrink(espresso, milk="whole", isIced=false, sprinkles=null, isChai=false) {
    this.espresso = espresso;
    this.milk = milk;
    this.isIced = isIced;
    this.sprinkles = sprinkles;
    this.isChai = isChai;
    this.drink = () => {
        console.log("that was delicious");
    }
    this.toString = () => {
        return `this is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
    }
}

const myDrink = new FancyDrink(2, "whole", false, "chocolate", true);
const latte = new FancyDrink(4, "Whole");
const icedChai = new FancyDrink(2, "skim", true);

// function fancyDrink(espresso, milk="whole", isIced=false, sprinkles=null, isChai=false) {
//     this.espresso = espresso;
//     this.milk = milk;
//     this.isIced = isIced;
//     this.sprinkles = sprinkles;
//     this.isChai = isChai;
//     this.drink = () => {
//         console.log("that was delicious");
//     }
//     this.toString = () => {
//         return `this is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
//     }
// }

class FancyDrink2 {
    constructor(espresso, milk="whole", isIced=false, sprinkles=null, isChai=false) {
        this.espresso = espresso;
        this.milk = milk;
        this.isIced = isIced;
        this.sprinkles = sprinkles;
        this.isChai = isChai;
    }
    drink() {
        console.log("that was delicious");
    }
    toString() {
        return `this is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
    }
}

// python is an OOP language
// javascript is more of a function programming language (you can do OOP, but it's not the primary focus)

const myDrink2 = new FancyDrink2(2, "whole", false, "chocolate", true);
const latte2 = new FancyDrink2(4, "Whole");
const icedChai2 = new FancyDrink2(2, "skim", true);



// this is an the object literal syntax, this is the common way to create objects in javascript, OOP will be this
const FancyDrink3 = {
    constructor(espresso, milk="whole", isIced=false, sprinkles=null, isChai=false) {
        this.espresso = espresso;
        this.milk = milk;
        this.isIced = isIced;
        this.sprinkles = sprinkles;
        this.isChai = isChai;
    },
    drink() {
        console.log("that was delicious");
    },
    drink2: () => {
        console.log("hey there");
    },
    toString() {
        return `this is a ${this.isChai ? "chai" : "coffee"} with ${this.espresso} espresso and ${this.milk} milk`;
    }
}

const drink6 = new FancyDrink3(2, "whole", false, "chocolate", true);
const latte3 = new FancyDrink3(4, "Whole");
const icedChai3 = new FancyDrink3(2, "skim", true);





