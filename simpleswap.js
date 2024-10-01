let a = 10;
let b = 20;

console.log("a: " + a + ", b: " + b);

let newA = a;
a = b;
b = a;

alert("Kas soovid numbrite A ja B väärtused omavahel vahetada?");

console.log("a: " + a + ", b: " + b);
