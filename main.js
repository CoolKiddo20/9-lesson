let letterSearch = ['non', 'asal', 'banan', 'olma', 'aziza', 'Gul', 'mashina'];

let sozlarN = []; // N harfi qatnashgan so'zlar
let sozlarBoshqa = []; // N harfi qatnashmaygan so'zlar

// Massivni tekshirish
for (let i = 0; i < letterSearch.length; i++) {
    if (letterSearch[i].toLowerCase().includes('n')) { // Harflarni katta-kichik belgilarga aylanishi uchun to'g'ri formatlash
        sozlarN.push(letterSearch[i]);
    } else {
        sozlarBoshqa.push(letterSearch[i]);
    }
}

// Natijalarni chiqarish
console.log("N harfi qatnashgan so'zlar:", sozlarN);
console.log("N harfi qatnashmaygan so'zlar:", sozlarBoshqa);
