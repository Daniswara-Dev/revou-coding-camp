// =============================================
// Materi: Function
// CCSE - Wednesday 18 November
// =============================================

// Function adalah sub-program yang bisa digunakan
// berkali-kali di dalam program yang sama
// atau di bagian lain dari kode.


// --- CARA 1: Standard Function Declaration ---
function caraBiasa() {
  console.log("Hello World!");
}

caraBiasa(); // Hello World!


// --- CARA 2: Function Expression ---
// Function disimpan ke dalam variabel
var caraExpresi = function () {
  console.log("Hello World!");
};

caraExpresi(); // Hello World!


// --- CARA 3: Arrow Function (=>) ---
// Sintaks lebih ringkas, diperkenalkan di ES6
var caraTandaPanah = () => {
  console.log("Hello World!");
};

caraTandaPanah(); // Hello World!


// =============================================
// Function dengan Parameter & Return Value
// =============================================

// Function tambah dengan 2 parameter
function tambah(a, b) {
  return a + b;
}

const hasil = tambah(5, 3);
console.log("Hasil:", hasil); // Hasil: 8


// Arrow function dengan parameter & return
const kurang = (x, y) => x - y;

console.log("Kurang:", kurang(10, 4)); // Kurang: 6


// =============================================
// Contoh tambahan
// =============================================

// Function dengan default parameter
function sapa(nama = "teman") {
  console.log("Halo, " + nama + "!");
}

sapa("Fandy"); // Halo, Fandy!
sapa();        // Halo, teman!


// Arrow function multi-baris (pakai kurung kurawal & return)
const kali = (x, y) => {
  let hasil = x * y;
  return hasil;
};

console.log("Kali:", kali(3, 4)); // Kali: 12
