/**
 * Variables / Scope
 */
var varVariable = "variable"
let letVariable = "variable"
const constVariable = "variable"

// console.log("🚀 ~ varVariable:", varVariable)
// console.log("🚀 ~ letVariable:", letVariable)
// console.log("🚀 ~ constVariable:", constVariable)

{
    // var varVariable = "blockVariable"
    // let letVariable = "blockVariable"
    // const constVariable = "blockVariable"
    // console.log("🚀 ~ varVariable:", varVariable)
    // console.log("🚀 ~ letVariable:", letVariable)
    // console.log("🚀 ~ constVariable:", constVariable)
}

// console.log("🚀 ~ varVariable:", varVariable)
// console.log("🚀 ~ letVariable:", letVariable)
// console.log("🚀 ~ constVariable:", constVariable)

/**
 * Primitive Types
 */
// String
const stringExample = "Hello World"
// const anotherString = new String("Hello World")

// console.log("=== String ===")
// console.log("🚀 ~ stringExample:", stringExample)
// console.log("🚀 ~ typeof stringExample:", typeof anotherString)

// Number
const numberExample = 42
// console.log("=== Number ===")
// console.log("🚀 ~ numberExample:", numberExample)
// console.log("🚀 ~ typeof numberExample:", typeof numberExample)

// Boolean
const booleanExample = true
// console.log("=== Boolean ===")
// console.log("🚀 ~ booleanExample:", booleanExample)
// console.log("🚀 ~ typeof booleanExample:", typeof booleanExample)


// Undefined
let undefinedExample
// console.log("=== Undefined ===")
// console.log("🚀 ~ undefinedExample:", undefinedExample)
// console.log("🚀 ~ typeof undefinedExample:", typeof undefinedExample)

// Null
const nullExample = null
// console.log("=== Null ===")
// console.log("🚀 ~ nullExample:", nullExample)
// console.log("🚀 ~ typeof nullExample:", typeof nullExample)
// console.log("🚀 ~ Is nullExample null:", null === nullExample)

// Symbol
const symbolExample = Symbol('description')
// console.log("=== Symbol ===")
// console.log("🚀 ~ symbolExample:", symbolExample)
// console.log("🚀 ~ typeof symbolExample:", typeof symbolExample)

// BigInt
const bigIntExample = BigInt(9007199254740991)
// console.log("=== BigInt ===")
// console.log("🚀 ~ bigIntExample:", bigIntExample)
// console.log("🚀 ~ typeof bigIntExample:", typeof bigIntExample)


/**
 * Functions
 */

function regularFunction(x) {
    return x * 2
}

const arrowFunction = (x) =>  x * 2

const functionExpression = function(x) {
    return x * 2
}

// console.log("=== Functions ===")
// console.log("🚀 ~ Regular function:", regularFunction(5))
// console.log("🚀 ~ Arrow function:", arrowFunction(5))
// console.log("🚀 ~ Function expression:", functionExpression(5))

// Common Built-in Functions
// console.log("=== Common Built-in Functions ===")
// console.log("🚀 ~ parseInt('42'):", parseInt('42'))
// console.log("🚀 ~ parseInt('42px'):", parseInt('42px'))
// console.log("🚀 ~ parseFloat('42.5'):", parseFloat('42.5'))
// console.log("🚀 ~ Math.random():", Math.random())
// console.log("🚀 ~ Math.floor(3.7):", Math.floor(3.7))
// console.log("🚀 ~ Math.ceil(3.2):", Math.ceil(3.2))
// console.log("🚀 ~ Math.round(3.5):", Math.round(3.5))
// console.log("🚀 ~ Date.now():", Date.now())
// console.log("🚀 ~ new Date():", new Date())
// console.log("🚀 ~ isNaN('hello'):", isNaN('hello'))
// console.log("🚀 ~ isFinite(Infinity):", isFinite(Infinity))
// console.log("🚀 ~ encodeURI('Hello World'):", encodeURI('Hello World'))
// console.log("🚀 ~ decodeURI('Hello%20World'):", decodeURI('Hello%20World'))


/**
 * Template Literals
 */
const name = "Alice"
const age = 25

// console.log("=== Template Literals ===")
// const stringConcatination = "My name is " + name + " and I am " + age + " years old."
// console.log("🚀 ~ Old way:", stringConcatination)

// const templateLiteral = `My name is ${name} and I am ${age} years old.`
// console.log("🚀 ~ Template literal:", templateLiteral)

// const withExpression = `${name} will be ${age + 1} next year.`
// console.log("🚀 ~ With expression:", withExpression)



/**
 * Objects
 */
const person = {
    name: "John",
    age: 30,
    greet() {
        return `Hello, I'm ${this.name}`
    }
}

// console.log("=== Objects ===")
// console.log("🚀 ~ person:", person)
// console.log("🚀 ~ person.name:", person.name)
// console.log("🚀 ~ person['age']:", person['age'])
// console.log("🚀 ~ person.greet():", person.greet())


/**
 * Constructor Functions
 */

function Person(name, age) {
    this.name = name
    this.age = age
    this.greet = function() {
        return `Hello, I'm ${this.name}`
    }
}

const person1 = new Person("John", 30)
const person2 = new Person("Jane", 25)


// console.log("=== Constructor Functions ===")
// console.log("🚀 ~ person1:", person1)
// console.log("🚀 ~ person2:", person2)
// console.log("🚀 ~ person1.greet():", person1.greet())
// console.log("🚀 ~ person2.greet():", person2.greet())



/**
 * Arrays
 */
const arrayExample = [1, 2, 3, 4, 5]
const arrayExample2 = new Array(1, 2, 3, 4, 5)
const emptyArray = []

// console.log("=== Arrays ===")
// console.log("🚀 ~ arrayExample:", arrayExample)
// console.log("🚀 ~ typeof arrayExample:", typeof arrayExample)
// console.log("🚀 ~ Array.isArray(arrayExample):", Array.isArray(arrayExample))
// console.log("🚀 ~ arrayExample2:", arrayExample2)
// console.log("🚀 ~ emptyArray:", emptyArray)

// Array basics
// console.log("=== Array Basics ===")
// console.log("🚀 ~ First element:", arrayExample[0])
// console.log("🚀 ~ Array length:", arrayExample.length)
// console.log("🚀 ~ Last element:", arrayExample[arrayExample.length - 1])
// console.log("🚀 ~ Accessing index 2:", arrayExample[2])

// Array modification
// arrayExample[0] = 10
// console.log("🚀 ~ After modifying first element:", arrayExample)

// Array with different types
// const mixedArray = [1, "hello", true, null, { name: "John" }]
// console.log("🚀 ~ Mixed array:", mixedArray)
// console.log("🚀 ~ Mixed array types:", mixedArray.map(item => typeof item))

/**
 * Methods
 */
// String Methods
const stringForMethods = "Hello World"

// console.log("=== String Methods ===")
// console.log("🚀 ~ length:", stringForMethods.length)
// console.log("🚀 ~ toUpperCase:", stringForMethods.toUpperCase())
// console.log("🚀 ~ toLowerCase:", stringForMethods.toLowerCase())
// console.log("🚀 ~ charAt(0):", stringForMethods.charAt(0))
// console.log("🚀 ~ indexOf('World'):", stringForMethods.indexOf('World'))
// console.log("🚀 ~ slice(0, 5):", stringForMethods.slice(0, 5))
// console.log("🚀 ~ replace('World', 'JavaScript'):", stringForMethods.replace('World', 'JavaScript'))
// console.log("🚀 ~ split(' '):", stringForMethods.split(''))


// Number Methods
const numberForMethods = 42.567
// console.log("=== Number Methods ===")
// console.log("🚀 ~ toFixed(2):", numberForMethods.toFixed(2))
// console.log("🚀 ~ toPrecision(3):", numberForMethods.toPrecision(3))
// console.log("🚀 ~ toString():", numberForMethods.toString())
// console.log("🚀 ~ toExponential(1):", numberForMethods.toExponential(1))
// console.log("🚀 ~ valueOf():", numberForMethods.valueOf())
// console.log("🚀 ~ isInteger:", Number.isInteger(numberForMethods))
// console.log("🚀 ~ isFinite:", Number.isFinite(numberForMethods))

// Array Methods
const arrayMethods = [1, 2, 3, 4, 5]
// console.log("=== Array Methods ===")
// console.log("🚀 ~ push(6):", arrayMethods.push(6), arrayMethods)
// console.log("🚀 ~ pop():", arrayMethods.pop(), arrayMethods)
// console.log("🚀 ~ shift():", arrayMethods.shift(), arrayMethods)
// console.log("🚀 ~ unshift(0):", arrayMethods.unshift(0), arrayMethods)
// console.log("🚀 ~ slice(1, 3):", arrayMethods.slice(1, 3))
// console.log("🚀 ~ splice(1, 2, 'a', 'b'):", arrayMethods.splice(1, 2, 'a', 'b'), arrayMethods)
// console.log("🚀 ~ indexOf(3):", arrayMethods.indexOf(3))
// console.log("🚀 ~ includes(3):", arrayMethods.includes(3))

// Higher Order Array methods
const numbers = [1, 2, 3, 4, 5]
// console.log("=== Higher Order Functions ===")
// console.log("Original array:", numbers)

// Map - transforms each element
// console.log("=== Map ===")
// console.log("🚀 ~ Double each number:", numbers.map(num => num * 2))
// console.log("🚀 ~ Convert to string:", numbers.map(num => num.toString()))
// console.log("🚀 ~ Add index:", numbers.map((num, index) => num + index))

// Filter - creates new array with elements that pass test
// console.log("=== Filter ===")
// console.log("🚀 ~ Even numbers:", numbers.filter(num => num % 2 === 0))
// console.log("🚀 ~ Numbers greater than 3:", numbers.filter(num => num > 3))
// console.log("🚀 ~ Numbers with index > 2:", numbers.filter((num, index) => index > 2))

// Reduce - reduces array to single value
// console.log("=== Reduce ===")
// console.log("🚀 ~ Sum of numbers:", numbers.reduce((sum, num) => sum + num, 0))
// console.log("🚀 ~ Product of numbers:", numbers.reduce((product, num) => product * num, 1))
// console.log("🚀 ~ Largest number:", numbers.reduce((max, num) => Math.max(max, num)))

// Object Methods
const objectExample = { name: "John", age: 30 }
// console.log("=== Object Methods ===")
// console.log("🚀 ~ keys:", Object.keys(objectExample))
// console.log("🚀 ~ values:", Object.values(objectExample))
// console.log("🚀 ~ entries:", Object.entries(objectExample))
// console.log("🚀 ~ hasOwnProperty('name'):", objectExample.hasOwnProperty('name'))
// console.log("🚀 ~ toString():", objectExample.toString())
// console.log("🚀 ~ valueOf():", objectExample.valueOf())
// Object.freeze(objectExample) //cant add, remove, or modify
// Object.seal(objectExample) //cant add, remove
// console.log("🚀 ~ isFrozen:", Object.isFrozen(objectExample)) 
// console.log("🚀 ~ isSealed:", Object.isSealed(objectExample)) 


/**
 * Query Selector, QuerySelectorAll, GetElementByID
 */

console.log("=== DOM Selectors ===")

// getElementById - returns single element
const byId = document.getElementById('selector-output')
// console.log("=== getElementById ===")
// console.log("🚀 ~ byId:", byId)
// console.log("🚀 ~ byId.textContent:", byId.textContent)

// getElementsByClassName - returns HTMLCollection
// const byClass = document.getElementsByClassName('output')
// console.log("=== getElementsByClassName ===")
// console.log("🚀 ~ byClass:", byClass)
// console.log("🚀 ~ byClass.length:", byClass.length)
// console.log("🚀 ~ First element:", byClass[0].textContent)
// console.log("🚀 ~ Second element:", byClass[1].textContent)

// getElementsByTagName - returns HTMLCollection
const byTag = document.getElementsByTagName('button')
// console.log("=== getElementsByTagName ===")
// console.log("🚀 ~ byTag:", byTag)
// console.log("🚀 ~ byTag.length:", byTag.length)
// console.log("🚀 ~ First button:", byTag[0].textContent)
// console.log("🚀 ~ Second button:", byTag[1].textContent)

// querySelector - returns first matching element
const byQuery = document.querySelector('.output')
// console.log("=== querySelector ===")
// console.log("🚀 ~ byQuery:", byQuery)
// console.log("🚀 ~ byQuery.textContent:", byQuery.textContent)

// querySelectorAll - returns NodeList
const byQueryAll = document.querySelectorAll('.output')
// console.log("=== querySelectorAll ===")
// console.log("🚀 ~ byQueryAll:", byQueryAll)
// console.log("🚀 ~ byQueryAll.length:", byQueryAll.length)
// console.log("🚀 ~ First element:", byQueryAll[0].textContent)
// console.log("🚀 ~ Second element:", byQueryAll[1].textContent)

/**
 * Event Listeners
 */
// Click Event - Increment Counter
document.getElementById('event-button').addEventListener('click', function() {
    const counterElement = document.getElementById("counter")
    const count = parseInt(counterElement.textContent)
    counterElement.textContent = count + 1 
    console.log("🚀 ~ Button clicked!")
})

// Focus Event - Input field
const focusInput = document.getElementById('focus-input')
const focusOutput = document.getElementById('focus-output')

focusInput.addEventListener('focus', function() {
    focusOutput.textContent = "Input is focused!"
    focusOutput.style.color = "green"
})

focusInput.addEventListener('blur', function() {
    focusOutput.textContent = "Input lost focus"
    focusOutput.style.color = "red"
})

// Hover Event
const hoverElement = document.getElementById('hover-element')
const hoverOutput = document.getElementById('hover-output')

hoverElement.addEventListener('mouseenter', function() {
    hoverOutput.textContent = "Mouse is hovering over the element"
    hoverElement.style.backgroundColor = "#d0d0d0"
})

hoverElement.addEventListener('mouseleave', function() {
    hoverOutput.textContent = "Mouse left the element"
    hoverElement.style.backgroundColor = "#f0f0f0"
})

// Double Click Event
const dblclickElement = document.getElementById('dblclick-element')
const dblclickOutput = document.getElementById('dblclick-output')

dblclickElement.addEventListener('dblclick', function() {
    dblclickOutput.textContent = "Element was double-clicked!"
    dblclickElement.style.backgroundColor = "#c0c0c0"
    
    // Reset background color after a short delay
    setTimeout(() => {
        dblclickElement.style.backgroundColor = "#e0e0e0"
    }, 500)
})

// Form Submit Event
const submitForm = document.getElementById('submit-form')
const formOutput = document.getElementById('form-output')

submitForm.addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault()
    
    // Get form values
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    
    // Display form data
    formOutput.innerHTML = `
        <p><strong>Form submitted!</strong></p>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
    `
    
    // Reset the form
    submitForm.reset()
    
    console.log("🚀 ~ Form submitted with:", { name, email })
})