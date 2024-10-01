// ----- NUMBER GUESSING GAME

// let minNumber = 1;
// let maxNumber = 10;
// let attemptsLeft = 3;
// let step = 0;

// let randomNumber = Math.floor(Math.random() * maxNumber) + minNumber;
// console.log(randomNumber);

// function guessNumber() {
//     while (attemptsLeft > step) {
//   let guess = prompt("Arva nr 1-10");
//   guess = Number(guess);
//   console.log(guess);

//   if (guess !== randomNumber) {
//     guess = prompt("Proovi veel!");
//   } else if (guess === randomNumber) {
//     alert("ÕIGE NUMBER!");
//     }
//     step++
//   }
// }

// guessNumber();

// -- EI TÖÖTA

function guessNumber() {
  let minNumber = 1;
  let maxNumber = 10;
  let attemptsLeft = 5;
  let step = 0;
  let randomNumber = Math.floor(Math.random() * maxNumber) + minNumber; // genereerib random numbri min-max vahemikus
  console.log(randomNumber);

  let guess = prompt(`Arva number ${minNumber} - ${maxNumber} vahemikus: `);
  guess = Number(guess);

  while (guess != randomNumber && attemptsLeft > step) {
    console.log(guess, guess != randomNumber);
    // guess = prompt(`Arva number ${minNumber} - ${maxNumber} vahemikus: `);

    // if (guess === null) {
    //   // katkestab mängu kui vajutada cancel
    //   alert("Mäng tühistati!");
    //   break; // lõpetab kogu loop'i
    // }

    if (isNaN(guess)) {
      alert("Pead sisestama mingi numbri!");
      guess = prompt(`Arva number ${minNumber} - ${maxNumber} vahemikus: `); // et prompt tuleks uuesti ette, muidu jääb ketrama alerti
    } else if (guess < minNumber || guess > maxNumber) {
      alert("Arvu ei ole mängus");
      guess = prompt(`Arva number ${minNumber} - ${maxNumber} vahemikus: `);
    } else if (guess > randomNumber) {
      guess = prompt("Arv on liiga suur");
    } else if (guess < randomNumber) {
      guess = prompt("Arv on liiga väike");
    }
    step++;
  }

  if (guess == randomNumber) {
    // kui õige nr, siis õnnitlus
    alert("ÕIGE VASTUS! JEE!");
  } else {
    // kui 3 korraga ei arvanud ära, siis ütleb, mis oli õige vastus
    alert("Õige vastus oli: " + randomNumber);
  }
}

guessNumber();
