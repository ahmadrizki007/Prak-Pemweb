//Ahmad Rizki Maulana
//121140105_RB

function hitungGanjilGenap(bilangan) {
    var jumlahGanjil = 0;
    var jumlahGenap = 0;

    for (var i = 1; i <= bilangan; i++) {
        if (i % 2 === 0) {
            jumlahGenap++;
        } else {
            jumlahGanjil++;
        }
    }
;
    console.log("Jumlah Ganjil: " + jumlahGanjil);
    console.log("Jumlah Genap: " + jumlahGenap);
}

hitungGanjilGenap(50);
