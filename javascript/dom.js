// =============================================
// Materi: DOM (Document Object Model)
// CCSE - Wednesday 18 November
// =============================================

// DOM adalah representasi struktur HTML dalam bentuk
// pohon objek (tree of objects) yang bisa diakses
// dan dimanipulasi oleh JavaScript.
//
// Struktur DOM Tree:
//   Document
//   └── Root element: <html>
//         ├── Element: <head>
//         │     └── Element: <title>
//         │           └── Text: "My Title"
//         └── Element: <body>
//               ├── Element: <h1>
//               │     └── Text: "My Header"
//               └── Element: <a>
//                     ├── Attribute: href
//                     └── Text: "My Link"


// =============================================
// 1. Getting an Element by ID
// =============================================
// Mengambil 1 elemen berdasarkan atribut id-nya

var title = document.getElementById("header-title");
console.log(title); // <h1 id="header-title">...</h1>


// =============================================
// 2. Getting Elements by Class Name
// =============================================
// Mengambil semua elemen yang punya class tertentu
// Hasilnya berupa HTMLCollection (mirip array)

var items = document.getElementsByClassName("list-items");
console.log(items); // semua elemen dengan class "list-items"


// =============================================
// 3. Getting Elements by Tag Name
// =============================================
// Mengambil semua elemen dengan tag HTML tertentu

var listItems = document.getElementsByTagName("li");
console.log(listItems); // semua elemen <li> di halaman


// =============================================
// 4. Getting Elements with querySelector
// =============================================
// Menggunakan CSS selector — lebih fleksibel
// querySelector → ambil 1 elemen (yang pertama ditemukan)
// querySelectorAll → ambil semua elemen yang cocok

// Select by ID (pakai #)
var footer = document.querySelector("#footer");

// Select by Class (pakai .)
var listItem = document.querySelector(".list-items");

// Select by Tag
var header = document.querySelector("h2");

// Select lebih spesifik (kombinasi)
var data = document.querySelector("h2.footer");

console.log(footer, listItem, header, data);


// =============================================
// Manipulasi DOM
// =============================================

// Mengubah teks konten elemen
var judulEl = document.getElementById("judul");
judulEl.innerText = "Teks baru dari JavaScript!";

// Mengubah HTML di dalam elemen
judulEl.innerHTML = "<strong>Teks Bold!</strong>";

// Mengubah style elemen
judulEl.style.color = "red";
judulEl.style.fontSize = "24px";

// Menambah class
judulEl.classList.add("active");

// Menghapus class
judulEl.classList.remove("active");

// Membuat elemen baru dan menambahkan ke DOM
var paragraf = document.createElement("p");
paragraf.innerText = "Paragraf baru dibuat oleh JS";
document.body.appendChild(paragraf);
