// Code goes here

// let deck = [
//     "Ace of Spades",
//     "Ten of Hearts",
//     "Three of Spades"
// ];

// let card1 = "Ace of Spades";
//     card2 = "Ten of Hearts";

// console.log("Welcome to Blackjack");
// console.log("You are a deal: ");
// console.log(" " + card1);
// console.log(" "+ card2);


let isMultiplayer = 6;

isMultiplayer = null;

console.log(isMultiplayer, typeof (isMultiplayer));


// Tablice

let value = [1, 2, 3];

console.log(value[0]);
console.log(value[1]);
console.log(value[2]);
console.log(value[3]);


let cards = ["Ace", "King", "Queen", "Jack"]

console.log(cards[0]);
console.log(cards[1]);
console.log(cards[2]);
console.log(cards[3]);
console.log(cards[4]);


// let cities = ["New York", "Los Angeles", "Chicago"]
// console.log(cities[0]);


// Push i Shift Feature of Arrray 

let cities = [11, 2, 3];

let addLastElementOfArray = cities.push(44); //dodaje element listy na końcu tablicy i zwraca dodany element
let remoweFirsElementOfArray = cities.shift(); //usuwa pierwszy element listy tablicy i zwraca usunięty element
cities.push(-15);

console.log(cities, remoweFirsElementOfArray);


// Pop Feaature of Array 

let deleteLastOfArray = [1, 2, 3, 44];

let result = deleteLastOfArray.pop(); //usuwa ostatni element tablicy i zwraca usinięty element

console.log(result);


// Splice feauter of Array 

let daneRejestracji = ['login', 'haslo', 'e-mail', 'numer telefonu'];

daneRejestracji.splice(0, 2, 22, 33, 44, 55); // dodaje i usuwa elementy z tablicy

console.log(daneRejestracji);






// Warunki

let state = 'FL';
let taxPercent = 0;



if (state === 'FL') { //równa się restrykcyjne
    taxPercent = 7;
}

console.log(taxPercent);



let stan = 'Floryda';
let podatekVat = 7;


if (stan !== 'Floryda') { // różne (nie równa się)
    podatekVat = 7;
} else if (state === 'New York') {
    taxPercent = 8.875;
} else {
    console.log("Niezła próba")
}

console.log(podatekVat);


let score = 800;

if (score > 1000) {
    score = score + 100;
    console.log("Bonus " + (score) + " pkt!")
} else if (score === 1000) {

    console.log("Prawie!")
}

console.log("Score is ", score);


// let woj = "Silesia";

// switch (woj) {
//     case 'Zb':
//     console.log('Zabrze');
//     break;
//     case 'Kat':
//     console.log('Katowice');
//     break
//     default: 
//     console.log('Unknown');
//     break;
// }



let woj = 'Silesia';

switch (woj) {
    case 'Mz':
        console.log('Mazowsze');
        break;
    case 'Silesia':
        console.log('Ślask');
        console.log('Zabrze')
        // break;
    default:
        console.log('Unknown');
        break;
}


// for (let i = 0; i < 5; i++ ) {
//     console.log(i);
// }


// let count = 1;
// while (count < 5){
//     console.log(count);
//     count++
// }




// let petla = 0
// while (petla <= 11){
//     console.log(petla);
//     petla++
// }






let suits = ['Hearts', 'Clubs', 'Diamond', 'Spades'];
let values = ['Ace', 'King', 'Queen', 'Jack', '10', '9', '8', '7', '6', '5', '4', '3', '2', '1']

let deck = [
    // "Ace of Spades",
    // "Ten of Hearts",
    // "Three of Spades"  
];

for (let suitIdx = 0; suitIdx < suits.length; suitIdx++) {
    for (let valueIdx = 0; valueIdx < value.length; valueIdx++) {
        deck.push(values[valueIdx] + ' of ' + suits[suitIdx]);
    }
}

for (let i = 0; i < deck.length; i++) {
    console.log(deck[i]);

}

let playerCards = [deck[0], deck[2]];

console.log("Welcome to Blackjack");
console.log("You are a deal: ");
console.log(" " + playerCards[0]);
console.log(" " + playerCards[1]);


let pushMethod = ['Jeden', 'Trzy', 'Cztery', 'Pięć', 'Osiem'];
// pushMethod.push(67);

// console.log(pushMethod)

for (let i = 0; i < pushMethod.length; i++) {
    // pushMethod.slice(55);
    console.log(i);
    setTimeout(function () {
        console.log(pushMethod[i]), 20000
    })

}