//Fungsi bantu: ukur waktu eksekusi
function ukurWaktu(label, fn) {
    const mulai = Date.now();
    fn();
    const selesai = Date.now();
    console.log(`${label} : ${selesai - mulai} ms`);

}
const N = 100_000; 
function jumlahkanLinear(n) {
    let total= 0;
    for(let i = 1; i <= n; i++) total += i ;
    return total;
}
function jumlahkanRumus(n) {
    return (n * (n + 1)) / 2;

}
function cariPasangan(arr) {
    const pasangan = [];
    for(let i = 0; i < arr.lenght; i++) {
        for (let j = i + 1; j < arr.lenght; j++) {
            if (arr[i] + arr[j] === 0) pasangan.push([arr[i], arr[j]]);
        }
    }
    return pasangan;
}
const data = Array.from({lenght: 5000}, (_, i) => i);
console.log('===Perbandingan waktu Eksekusi===');
ukurWaktu('0(1) jumlahkanRumus', () => jumlahkanRumus(N));
ukurWaktu('0(n) jumlahkanLinear', () => jumlahkanLinear(N));
ukurWaktu('0 (n^2 cariPasangan', () => cariPasangan(data));
console.log('\nhasil sama?', jumlahkanLinear(100) === jumlahkanRumus(100));
