for (jumlahAngkot = 10, angkotBeroperasi = 5, noAngkot = 1; noAngkot <= jumlahAngkot; noAngkot++) {
  if (noAngkot <= angkotBeroperasi && noAngkot !== 2 && noAngkot !== 3) {
    console.log("Angkot No. " + noAngkot + " sedang beroperasi.");
  } else if (noAngkot === 3 || noAngkot === 10 || noAngkot === 2) {
    console.log("Angkot No. " + noAngkot + " sedang lembur.");
  } else {
    console.log("Angkot No. " + noAngkot + " sedang tidak beropersi");
  }
}
