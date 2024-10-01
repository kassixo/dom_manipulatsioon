// ----- ADDITION CALCULATOR

let a = prompt("a = ?"); // sulgudes olev on promptis olev tekst, mitte prompti sisu
let b = prompt("b = ?");

a = Number(a); // konverteerib eelnevalt loodud a variable numbriks, muidu võtab seda arvese kui stringi
b = Number(b);

let sum = a + b; // summa liidab kokku 2 numbrit

document.write("The sum is: " + sum);
