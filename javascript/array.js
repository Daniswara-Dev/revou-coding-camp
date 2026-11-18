// =============================================
// Materi: Array
// CCSE - Wednesday 18 November
// =============================================

// --- Membuat array ---
let buah = ["apel", "mangga", "pisang"];

// --- push: tambah elemen di akhir ---
buah.push("jeruk");
console.log(buah); // ["apel", "mangga", "pisang", "jeruk"]

// --- splice: hapus elemen (index, jumlah yg dihapus) ---
buah.splice(1, 1); // hapus "mangga"
console.log(buah); // ["apel", "pisang", "jeruk"]

// --- length: panjang array ---
console.log(buah.length); // 3

// --- includes: cek apakah elemen ada ---
console.log(buah.includes("apel")); // true
console.log(buah.includes("mangga")); // false

// --- Akses elemen array (index dimulai dari 0) ---
console.log(buah[0]); // "apel"
console.log(buah[1]); // "pisang"

// --- Looping array ---
for (let i = 0; i < buah.length; i++) {
  console.log(buah[i]);
}

// --- Cara lain looping: forEach ---
buah.forEach(function (item) {
  console.log(item);
});
