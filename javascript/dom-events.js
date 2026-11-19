// =============================================
// Materi: DOM Events & Event Listener
// CCSE - Wednesday 18 November
// =============================================

// Event adalah sesuatu yang terjadi di halaman web:
// klik tombol, input teks, hover mouse, submit form, dll.
// JavaScript bisa "mendengarkan" event tersebut
// menggunakan Event Listener.


// =============================================
// Cara menambahkan Event Listener
// =============================================

// Sintaks:
// element.addEventListener("nama-event", function() { ... });

var tombol = document.getElementById("btn");

tombol.addEventListener("click", function () {
  console.log("Tombol diklik!");
});


// =============================================
// Jenis-jenis Event yang umum digunakan
// =============================================

var inputEl = document.getElementById("myInput");

// click  → saat elemen diklik
inputEl.addEventListener("click", function () {
  console.log("Input diklik");
});

// input  → saat nilai input berubah (tiap ketikan)
inputEl.addEventListener("input", function (e) {
  console.log("Kamu mengetik:", e.target.value);
});

// change → saat nilai input berubah dan kehilangan fokus
inputEl.addEventListener("change", function (e) {
  console.log("Nilai berubah:", e.target.value);
});

// keydown → saat tombol keyboard ditekan
inputEl.addEventListener("keydown", function (e) {
  console.log("Tombol ditekan:", e.key);
});

// mouseover → saat mouse masuk ke area elemen
tombol.addEventListener("mouseover", function () {
  console.log("Mouse hover di tombol");
});

// submit → saat form disubmit
var form = document.getElementById("myForm");
form.addEventListener("submit", function (e) {
  e.preventDefault(); // mencegah halaman reload
  console.log("Form disubmit!");
});


// =============================================
// Contoh Project: Traffic Light
// (lihat traffic-light.html untuk versi lengkap)
// =============================================

// Logika sederhana traffic light berdasarkan input
function cekLampu(warna) {
  if (warna === "merah") {
    console.log("STOP - Lampu Merah 🔴");
  } else if (warna === "kuning") {
    console.log("HATI-HATI - Lampu Kuning 🟡");
  } else if (warna === "hijau") {
    console.log("JALAN - Lampu Hijau 🟢");
  } else {
    console.log("Warna tidak dikenal");
  }
}

cekLampu("merah");  // STOP - Lampu Merah 🔴
cekLampu("hijau");  // JALAN - Lampu Hijau 🟢
