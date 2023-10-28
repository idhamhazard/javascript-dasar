// Object Literal
let biodata1 = {
  nama: "idham hazard",
  umur: "16",
  hobi: "sepak bola",
  alamat: {
    jalan: "jl. pejaten raya",
    kel: "pejaten barat",
    kec: "pasar minggu",
  },
};

let biodata2 = {
  nama: "rizky ade putra",
  umur: "16",
  hobi: "futsal",
  alamat: {
    jalan: "jl. kemang raya",
    kel: "pejaten barat",
    kec: "pasar minggu",
  },
};

// Function Declaration
function buatObjectMahasiswa(nama, email, jurusan) {
  let dataMahasiswa = {};
  dataMahasiswa.nama = nama;
  dataMahasiswa.email = email;
  dataMahasiswa.jurusan = jurusan;
  return dataMahasiswa;
}
let mahasiswa1 = buatObjectMahasiswa("rafa", "rafa123@gmail.com", "otkp");
let mahasiswa2 = buatObjectMahasiswa("ujang", "ujang@gmail.com", "multimedia");

// Constructor
function Mahasiswa(nama, umur, email, jurusan) {
  this.nama = nama;
  this.umur = umur;
  this.email = email;
  this.jurusan = jurusan;
}
let mahasiswa3 = new Mahasiswa("ujang", 14, "ujang@gmail,com", "tkr");

