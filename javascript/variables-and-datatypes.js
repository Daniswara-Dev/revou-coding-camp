// =============================================
// Materi: Variables & Data Types
// CCSE - Wednesday 18 November
// =============================================

// --- Deklarasi variabel dengan let ---
let teks = "Halo";       // string
let angka = 42;          // number
let status = true;       // boolean
let kosong = null;       // null
let tidakAda;            // undefined
let daftar = [1, 2, 3]; // array
let objek = { a: 1, b: 2 }; // object

// --- Menampilkan nilai variabel ---
console.log(teks);    // "Halo"
console.log(angka);   // 42
console.log(status);  // true
console.log(kosong);  // null
console.log(tidakAda); // undefined
console.log(daftar);  // [1, 2, 3]
console.log(objek);   // { a: 1, b: 2 }

// --- Cek tipe data dengan typeof ---
console.log(typeof teks);     // "string"
console.log(typeof angka);    // "number"
console.log(typeof status);   // "boolean"
console.log(typeof kosong);   // "object" (quirk di JS)
console.log(typeof tidakAda); // "undefined"
console.log(typeof daftar);   // "object"
console.log(typeof objek);    // "object"
