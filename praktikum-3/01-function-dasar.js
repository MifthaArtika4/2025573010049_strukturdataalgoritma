function sapa(){
    console.log('Halo Selamat Datang di praktikum JavaScript.');
}
sapa();
sapa();

function sapaNama(nama){
    console.log(`Halo, ${nama}! Selamat belajar.`);
}
sapaNama('Budi');
sapaNama('Siti');

function tambah(angka1, angka2){
    const hasil = angka1 + angka2;
    return hasil;
} 
const hasilPenjumlahan = tambah(10, 25);
console.log('10 + 25 =', hasilPenjumlahan);
console.log('7 + 13 =', tambah(7, 13));

function hitung(nilai, pengali = 2){
    return nilai * pengali;
}
console.log(hitung(5));
console.log(hitung(5, 3));
const pesanGlobal = 'Saya ada dimana saja';
function cekScope(){
    const pesanLokal = 'Saya hanya ada di dalam function ini';
    console.log(pesanGlobal);
    console.log(pesanLokal);

}
 cekScope();
 console.log(pesanGlobal);

 //latihan//
 function kurang (a, b){
    const hasil = a - b;
    return hasil;
 }
 const hasilPengurangan = kurang(19, 5);
 console.log('19 - 5 =', hasilPengurangan);

 function kali (a, b){
    const hasil = a * b;
    return hasil;
 }
 const hasilPerkalian = kali(17, 4);
 console.log('17 * 4 =', hasilPerkalian);

 function bagi (a, b){
    const hasil = a / b;
    if(b === 0){
        console.log(error);
        return null;
    }
    return hasil;
 }
 const hasilPembagian = bagi(18, 2);
 console.log('18 / 2 =', hasilPembagian);

 function kalkulator(a, operator, b) {
    switch (operator) {
        case "+":
            console.log('8 + 10 =', tambah (8, 10));
            break;
         case "-":
            console.log('11 - 1 +', kurang (11, 1));
            break;
         case "*":
            console.log('9 * 2 =', kali (9, 2));
            break;
        default:
            console.log(error)
    }
 }
 kalkulator(8, "+", 10 );
 kalkulator(11, "-", 1 );
 kalkulator(9, "*", 2 );



