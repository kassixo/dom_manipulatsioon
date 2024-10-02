let fruits = ["apple", "orange", "banana", "coconut"];
let newFruits = [...fruits]; // kopeerib eelmise array ja annab sellele uue nimetuse ( saab kasutada nt, et vajadusel anda uusi andmeid juurde, ent jätta esimene array muutmata)
let vegetables = ["carrots", "kurgid", "tomatid"];

let foods = [...fruits, ...vegetables, "eggs", "milk"]; // kopeerib fruitsi ja vege arrays olevad asjad, lisab 2 asja ja loob uue nimelise data array

console.log(fruits);
console.log(newFruits);
console.log(vegetables);
console.log(foods);

// fruits.push("coconut")
// fruits.pop()
// fruits.unshift("mango")
// fruits.shift()

for (let fruitorwhatever of fruits) {
  console.log(fruitorwhatever); // näitab konsoolis iga objekti selles arrays, eraldi real
}

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); // kolm unkti avab arrayde kasti, et sealt andmed kätte saada
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

let username = "Bro Code";
// let letters = [...username]; // võtab iga tähte eraldi "B" "r" "o" stiilis
let letters = [...username].join("-"); // paneb iga tähemärgi vahele sidekriipsu

console.log(letters);

/* 
spread = expands an array into separate elements
rest = bundles separate elements into an array
*/

function openFridge(...foods2) {
  console.log(foods2);
}

function getFood(...foods2) {
  return foods2;
}
const food1 = "toit1";
const food2 = "toit2";
const food3 = "toit3";
const food4 = "toit4";

const foods2 = getFood(food1, food2, food3, food4);

console.log(foods2);

function sum(...numbers2) {
  let result = 0;
  for (let number of numbers2) {
    result += number;
  }
  return result;
}

function getAverage(...numbers2) {
  // ...numbers2 = "võtan mingid andmed ja teen need arrayks nimega numbers2"
  let result = 0;
  for (let number of numbers2) {
    result += number;
  }
  return result / numbers2.length;
}

const total = getAverage(75, 100, 85, 90, 50);

console.log(total);

const person1 = {
  firstName: "Spong", // KOMAD PEAVAD OLEMA REA LÕPUS
  favFood: "hamburgers",
  age: 30,
  isEmployed: false,
  sayHello: function () {
    console.log(`Tere, olen ${this.firstName} ja olen ${this.age}-aastane!`); // ei tööta arrow funktsiooni sees
  },
  eat: () => console.log("Söön burgereid"),
};

console.log(person1.firstName); //teine value on see, mida tahan võtta selle persooni andmetest arvesse

const person2 = {
  firstName: "Patrik", // KOMAD PEAVAD OLEMA REA LÕPUS
  favFood: "komme",
  age: 25,
  isEmployed: true,
  sayHello: () => console.log("Tere, olen Pätu!"),
};

console.log(person2.isEmployed);
person1.sayHello();
person2.sayHello();
person1.eat();

// constructor

function Car(make, model, year, color) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.color = color;
}

const car1 = new Car("Ford", "Mustang", 2022, "Red");
const car2 = new Car("BMW", "X5", 2018, "Gray");

console.log(car1);
console.log(car1.make, car1.year);
