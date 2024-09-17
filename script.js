// siit algab lahe javascript

// getting elements

const playground = document.getElementById('playground');

// adding elements
playground.append(' 🚀 Spaceship');

const magicalStar = document.createElement('div')
magicalStar.textContent = '⭐'
playground.append(magicalStar)

// modifying text content

const scrollOfWisdom = document.createElement('p')
playground.append(scrollOfWisdom)

scrollOfWisdom.innerText = 'Ancient wisdom'
console.log(scrollOfWisdom.innerText)

scrollOfWisdom.textContent = 'Ancient wisdom'
console.log(scrollOfWisdom.textContent)

// kuvab konsoolis

console.log(playground.innerText)
console.log(playground.textContent)

// HTML elementidega töötamine

const spellbook = document.createElement('div')
spellbook.innerHTML = '<p>Spells include <strong>levitation!</strong></p>'
playground.append(spellbook)


// playground.innerHTML = '<p>inner html test</p>'

// console.log(playground.textContent)
// console.log(playground.innerHTML)

// const userInput = '<img src="x" onerror="alert(\'Hacked!\')">'

// playground.innerHTML = userInput

// kustutada elementi

const temporaryElement = document.createElement('p')
temporaryElement.textContent = "JÄNES"
playground.append(temporaryElement)

// kasutan siis, kui tahan kustutada ainult ühte divi või constiga loodud asja, see läheb sulgudesse
// playground.removeChild(scrollOfWisdom)

// kustutab kõik parent childi sees olevad asjad

while (playground.firstChild) {
    playground.removeChild(playground.firstChild)
}

// kui tahan kustutada ainult kindlat divi, siis kustutan nimeliselt

// kuidas lisada id ja class div konteinerile

const magicWand = document.createElement('div')
// saab ka         .setAttribute('id/class', 'wand1')         kasutada
magicWand.id = "wand1"
magicWand.className = "magical-item wand"
magicWand.textContent = "Magic Wand !!!"

playground.append (magicWand)
console.log("Div id: ", magicWand.id)
console.log("Div class: ",magicWand.className)

// console.log(magicWand.getAttribute('class))

// ----- DATA ATRIBUUDID

magicWand.dataset.spell = 'invisibility'
magicWand.dataset.components = 'moonlight, shadow essence'

console.log("Spell type: ", magicWand.dataset.spell)
console.log("Components", magicWand.dataset.components.split(','))

// ----- KLASSIDE MANIPULEERIMINE

magicWand.classList.add('test1', 'test2')
console.log("Updated classes:", magicWand.className)

magicWand.classList.remove('test2') // eemaldab
magicWand.classList.add('test3') // lisab
console.log("Updated classes:", magicWand.className) // näitab konsoolis uuendatud listi, kuna eelmine tõmbamine ei toimi hetkel

// magicWand.classList.toggle('invisible', Math.random() > 0.5)
magicWand.classList.toggle('invisible', true)
magicWand.classList.replace('test3', 'cool')

console.log("Third class", magicWand.classList.item(1)) //sulgudes näitab mitmenda koha klassi

// ----- INLINE STIILID

magicWand.style.fontSize = '50px'
magicWand.style.fontWeight = '700'
magicWand.style.color = '#cccccc'
playground.style.backgroundColor = '#1e1e1e'


// ----- EVENT HANDLING

const mButton = document.createElement('button')
mButton.textContent = 'Vajuta siia'
playground.append(mButton)

// mButton.addEventListener('click', () => {
//     alert('Suvaline tekst')
// })

mButton.addEventListener('mouseover', (event) => {
    event.target.style.cursor = 'pointer'
})

// hover tekib sedasi

mButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'yellow'
})

mButton.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = ''
})

// kuidas teha funktsiooniga
function spellCast() {
    alert('Mingi alerti tekst')
}

mButton.addEventListener('click', spellCast)

//see rida eemaldab click listeneri ja funktsiooni sellelt asjalt
mButton.removeEventListener('click', spellCast)