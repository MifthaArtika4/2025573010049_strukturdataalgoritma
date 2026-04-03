// 04-kondisional.js
// ================================================
// KONDISIONAL: if/else, switch, ternary
// ================================================
// --- IF / ELSE IF / ELSE: Konversi nilai ke grade ---
let nilaiUjian = 90;
 
console.log('=== Konversi Grade ===');
console.log('Nilai:', nilaiUjian);
if (nilaiUjian >= 90) {
console.log('Grade: A (Sangat Baik)');
} else if (nilaiUjian >= 80) {
console.log('Grade: B (Baik)');
} else if (nilaiUjian >= 70) {
console.log('Grade: C (Cukup)');
} else if (nilaiUjian >= 60) {
console.log('Grade: D (Kurang)');
} else {
console.log('Grade: E (Tidak Lulus)');
}
// --- SWITCH: Cek nama hari ---
let namaHari = 'Rabu';
console.log('\n=== Cek Jenis Hari ===');
switch (namaHari) {
case 'Senin':
case 'Selasa':
case 'Rabu':
case 'Kamis':
case 'Jumat':
console.log(`${namaHari} adalah hari kerja.`);
break;
case 'Sabtu':
case 'Minggu':
console.log(`${namaHari} adalah akhir pekan.`);
break;
default:
console.log('Nama hari tidak dikenali.');
}
// --- TERNARY OPERATOR: Cek kelulusan ---
let nilaiAkhir = 65;
let statusLulus = nilaiAkhir >= 60 ? 'LULUS' : 'TIDAK LULUS';
console.log('\n=== Status Kelulusan ===');
console.log(`Nilai ${nilaiAkhir}: ${statusLulus}`);

//LATIHAN
const bulan = 12;
const adaAwan = true;
const adaAngin = false;
if(bulan == 12 || bulan == 1 ||bulan == 2){
    console.log('Musim Dingin');
}else if(bulan == 3 || bulan == 4||bulan == 5){
    console.log('Musim Semi');
}else if(bulan == 6 || bulan == 7||bulan == 8){
    console.log('Musim Panas');
}else if(bulan == 9 || bulan == 10||bulan == 11){
    console.log('Musim Gugur');
}

// operator logika
console.log(Bulan: ${bulan});
console.log(Musim: ${musim});

// operator logika
console.log(Apakah mendung dan berangin? ${adaAwan && adaAngin});
console.log(Apakah ada awan atau angin? ${adaAwan || adaAngin});
console.log(Apakah langit cerah? ${!adaAwan});