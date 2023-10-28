let penumpang = ["rara", "", "ojak"];
let tambahPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    // tambah penumpang di awal array
    penumpang.push(namaPenumpang);
    // kembalikan isi Array & keluar dari function
    return penumpang;
  } else {
    // telusuri semua kursi dari awal
    for (let i = 0; i < penumpang.length; i++) {
      // jika ada kursi kosong
      if (penumpang[i] == "") {
        // tambah penumpang di kursi kosong tersebut
        penumpang[i] = namaPenumpang;
        // kembalikan isi Array & keluar dari function
        return penumpang;
      }
      // jika sudah ada nama yang sama
      else if (penumpang[i] == namaPenumpang.toLowerCase()) {
        // tampilkan pesan keslahannya
        console.log(namaPenumpang + " sudah ada didalam angkot");
        // kembalikan isi Array & keluar dari function
        return penumpang;
      }
      // jika seluruh kursi terisi
      else if (i == penumpang.length - 1) {
        // tambah penumpang di akhir array
        penumpang.push(namaPenumpang);
        // kembalikan isi Arrayi & keluar dari function
        return penumpang;
      }
    }
  }
};

let hapusPenumpang = function (namaPenumpang, penumpang) {
  // jika angkot kosong
  if (penumpang.length == 0) {
    console.log("angkot masih kosong");
    return penumpang;
  } else {
    for (let i = 0; i < penumpang.length; i++) {
      if (penumpang[i] == namaPenumpang) {
        penumpang[i] = "";
        return penumpang;
      } else if (i == penumpang.length - 1) {
        console.log(namaPenumpang + " tidak ada dalam angkot");
        return penumpang;
      }
    }
  }
};
