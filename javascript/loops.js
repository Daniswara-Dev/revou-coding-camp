// =============================================
// Materi: Loops (Perulangan)
// CCSE - Wednesday 18 November
// =============================================

// Loops digunakan untuk menjalankan blok kode
// secara berulang sebanyak yang kita butuhkan.
//
// Tipe loop di JavaScript:
//   Counted Loops  : for, forEach
//   Uncounted Loops: while, do/while


// --- FOR LOOP ---
// Digunakan ketika tahu berapa kali perulangan dilakukan
for (let i = 0; i < 3; i++) {
  console.log("Iterasi ke-" + i);
}
// Output:
// Iterasi ke-0
// Iterasi ke-1
// Iterasi ke-2


// --- WHILE LOOP ---
// Digunakan ketika tidak tahu pasti berapa kali,
// tapi tahu kondisi berhentinya
let count = 0;

while (count < 3) {
  console.log("Count: " + count);
  count++;
}
// Output:
// Count: 0
// Count: 1
// Count: 2


// --- DO/WHILE LOOP ---
// Mirip while, tapi blok kode dijalankan minimal 1 kali
// meskipun kondisi langsung false
let angkaDo = 0;

do {
  console.log("Do/While: " + angkaDo);
  angkaDo++;
} while (angkaDo < 3);
// Output:
// Do/While: 0
// Do/While: 1
// Do/While: 2


// --- FOR...OF (array) ---
// Digunakan untuk iterasi langsung isi array
let angka = [10, 20, 30];

for (let a of angka) {
  console.log("Angka:", a);
}
// Output:
// Angka: 10
// Angka: 20
// Angka: 30


// --- FOREACH ---
// Method bawaan array, mirip for...of
angka.forEach(function (val) {
  console.log("Val:", val);
});
// Output:
// Val: 10
// Val: 20
// Val: 30

// forEach dengan arrow function (lebih ringkas)
angka.forEach((val) => console.log("Arrow forEach:", val));
