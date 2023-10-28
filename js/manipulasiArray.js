// // Menaambah Array
// let namaSiswa = [];
// namaSiswa[0] = "rafi";
// namaSiswa[1] = "radit";
// namaSiswa[2] = "anto";
// console.log(namaSiswa[2]);

// // Menghapus Isi Array
// let namaBenda = ["botol", "sedok", "garpu"];
// namaBenda[0] = undefined;
// console.log(namaBenda);

// // Menampilkan Array
// let daftarSiswa = ["ujang", "nasroh", "nunung", "nana"];
// for (let i = 0; i < daftarSiswa.length; i++) {
//   console.log("inilah daftar mahasiswa ke-" + (i + 1) + " : " + daftarSiswa[i]);
// }

// // Method Pada Array

// // 1. Join
// let namaPopIce = ["taro", "coklat", "permen karet"];
// console.log(namaPopIce.join(" - "));

// // 2. Push & Pop

// // Push / Menambah Elemen Terakhir Sebuah Array
// namaPopIce.push(" mangga", " duren");
// console.log(namaPopIce.join(" - "));

// // Pop / Menghapus Halaman Terahir Sebuah Array
// namaPopIce.pop();
// namaPopIce.pop();
// console.log(namaPopIce.join(" - "));

// // 3. Unsifht & Shift

// // Unshift // Menambah Halaman Pertama Pada Array
// namaPopIce.unshift("vanilla");
// console.log(namaPopIce.join(" - "));

// // Shift // Menghapus Halamab Pertama Pada Array
// namaPopIce.shift();
// console.log(namaPopIce.join(" - "));

// 4. Splice & Slice

// Splice (indexAwal, mauDihapusBerapa, elemenBaru1, elemenBaru2, ...)
let namaMakanan = ["bakso", "mie ayam", "nasi padang"];
namaMakanan.splice(1, 1, "rujak", "soto", "bubur");
console.log(namaMakanan.join(" - "));

// Slice / Mengiris Sebuah Array Menjadi Array yg Baru
// Slice (awal, akhir)
let buahBuahan = ["apel", "jeruk", "manggis", "salak", "anggur"];
let buahBuahan2 = buahBuahan.slice(1, 4);
console.log(buahBuahan.join(" - "));
console.log(buahBuahan2.join(" - "));

// // 5. forEach
// let angka1 = [1, 2, 3, 4, 5, 6, "stop"];
// for (let i = 0; i < angka1.length; i++) {
//   console.log(angka1[i]);
// }

// // Menggunakan forEach
// let jenisMotor = ["nmax", "rx-king", "ninja"];
// jenisMotor.forEach(function (e, i) {
//   console.log("ini nama motor ke-" + (i + 1) + " adalah " + e);
// });

// Map
let angka = [3, 2, 1, 8, 6, 7];
let angka2 = angka.map(function (e) {
  return e * 2;
});
console.log(angka2.join());

// Sort
let angkaSort = [3, 2, 1, 8, 6, 7];
angkaSort.sort();
console.log(angkaSort.join());

let angkaSort2 = [3, 2, 1, 20, 10, 30, 8, 6, 7];
angkaSort2.sort(function(a, b){
  return a-b
});
console.log(angkaSort2.join());
