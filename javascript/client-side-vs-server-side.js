// =============================================
// Materi: Client Side vs Server Side JavaScript
// CCSE - Wednesday 18 November
// =============================================

// Analogi: Restaurant
//   Client Side = Ruang makan (yang dilihat tamu)
//   Server Side  = Dapur (yang terjadi di belakang layar)


// =============================================
// CLIENT SIDE (dijalankan di Browser)
// =============================================
// Tugas Client Side:
//   - Building page layouts
//   - Designing the user interface
//   - Adding form validation
//   - Styling visual elements (colors, fonts, animations)
//   - Handling user interactions (click, scroll, input)
//   - Updating content dynamically tanpa reload halaman

// Contoh: tombol diklik → jalankan fungsi di browser
console.log("Client: You clicked the button!");

// Contoh manipulasi DOM (hanya berjalan di browser)
// document.getElementById("btn").addEventListener("click", function () {
//   alert("Tombol diklik!");
// });


// =============================================
// SERVER SIDE (dijalankan di Server, contoh: Node.js)
// =============================================
// Tugas Server Side:
//   - Creating dynamic website logic
//   - Building web application functionality
//   - Connecting the website to databases
//   - Processing and validating data on the backend
//   - Managing authentication, authorization, and sessions
//   - Handling APIs and server responses

// Contoh: Server Side dengan Node.js + Express
const express = require("express");
const app = express();

app.get("/api/hello", (req, res) => {
  res.send("Server: Hello from server!");
});

app.listen(3000, () => console.log("Server running at http://localhost:3000"));


// =============================================
// PERBEDAAN UTAMA
// =============================================
//
//  Client Side                   Server Side
//  ─────────────────────────────────────────────
//  Berjalan di browser           Berjalan di server
//  Bahasa: HTML, CSS, JS         Bahasa: Node.js, Python, PHP, dll
//  User bisa lihat kodenya       User tidak bisa lihat kodenya
//  Contoh: validasi form,        Contoh: login, koneksi database,
//          animasi, UI           query data, API
