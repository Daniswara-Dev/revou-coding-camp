// =============================================
// Materi: Conditional (Percabangan)
// CCSE - Wednesday 18 November
// =============================================

// --- If / Else If / Else ---
let nilai = 80;

if (nilai >= 90) {
  console.log("A");
} else if (nilai >= 75) {
  console.log("B");
} else {
  console.log("C");
}

// --- Contoh lebih lengkap (grade sistem) ---
let nilaiSiswa = 85;
let grade = "";

if (nilaiSiswa >= 90) {
  grade = "A";
} else if (nilaiSiswa >= 80) {
  grade = "B";
} else if (nilaiSiswa >= 70) {
  grade = "C";
} else if (nilaiSiswa >= 60) {
  grade = "D";
} else if (nilaiSiswa >= 50) {
  grade = "E";
} else {
  grade = "F";
}

console.log("Grade kamu: " + grade); // "Grade kamu: B"

// --- Switch / Case ---
let hari = "Senin";

switch (hari) {
  case "Senin":
    console.log("Hari pertama kerja");
    break;
  case "Jumat":
    console.log("Hari terakhir kerja");
    break;
  default:
    console.log("Hari biasa");
}

// --- Ternary Operator ---
let umur = 20;
let status = umur >= 18 ? "Dewasa" : "Belum dewasa";
console.log(status); // "Dewasa"
