// ----- RUDIMENTARY CALCULATOR

let x = prompt("Sisesta esimene number"); // sulgudes olev on promptis olev tekst, mitte prompti sisu
console.log("Esimene number: " + x);

let y = prompt("Sisesta teine number");
console.log("Teine number: " + y);

x = Number(x); // konverteerib eelnevalt loodud a variable numbriks, muidu võtab seda arvese kui stringi
y = Number(y);

let operation = prompt(
  "Sisesta tehte liigi tähis! \na: liida\ns: lahuta\nm: korruta\nd: Jaga\ne: Astenda\nr: Jääk"
);

/* Kui tahta javascriptis rida vahetada, siis selleks saab kasutada \n teksti vahel*/

let result; // defineerin resulti, et saaksin järnevas switchis anda sellele erinevad operatsioonid

switch (operation) {
  case "a": // Liitmine
    console.log("Valitud tehe: " + x + "+" + y);
    result = x + y;
    break;
  case "s": //lahutamine
    console.log("Valitud tehe: " + x + "-" + y);
    result = x - y;
    break;
  case "m": //korrutamine
    console.log("Valitud tehe: " + x + "*" + y);
    result = x * y;
    break;
  case "d": // jagamine
    console.log("Valitud tehe: " + x + "/" + y);
    result = x / y;
    break;
  case "e": //astendamine
    console.log("Valitud tehe: " + x + "astmes" + y);
    result = x ** y;
    break;
  case "r": // jääk
    console.log("Valitud tehe: " + x + "jääk" + y);
    result = x % y;
    break;
}

// näita vastust
console.log("Vastus on: " + result);
