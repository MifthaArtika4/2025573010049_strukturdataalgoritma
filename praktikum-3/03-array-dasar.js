const mahasiswa = ['Budi', 'Siti', 'Ahmad', 'Rina'];
const nilai = [85, 92, 78, 95, 88];
console.log('\n===Akses Element===');
console.log('Element pertama:', mahasiswa[0]);
console.log('Element ketiga :', mahasiswa[2]);
console.log('Element terakhir :', mahasiswa[mahasiswa.length - 1]);
mahasiswa[1] = 'Siti Rahayu';
console.log('\nSetelah diubah:', mahasiswa);
console.log('\n===Manipulasi array===');
mahasiswa.push('Doni');
console.log('Setelah push :', mahasiswa);
mahasiswa.unshift('Zahra');
console.log('Setelah unshift :', mahasiswa);
const dihapusAkhir = mahasiswa.pop();
console.log('Dihapus (pop) :', dihapusAkhir);
console.log('Setelah pop :', mahasiswa)
const dihapusAwal = mahasiswa.shift();
console.log('Dihapus (shift) :', dihapusAwal);
console.log('Setelah shift :', mahasiswa);
console.log('\n===Pencarian===');
console.log('Indeks Ahmad :', mahasiswa.indexOf('Ahmad'));
console.log('Ada Rina :', mahasiswa.includes('Rina'));
console.log('Ada Budi? :', mahasiswa.includes('Budi'));
const sebagian = nilai.slice(1, 4);
console.log('\nNilai asli :', nilai);
console.log('Slice [1,4] :', sebagian);

//latihan
const daftarBelanja = ['Beras', 'Gula','Telur', 'Kopi'];

console.log('\n=== Daftar Belanja Awal ===');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}
daftarBelanja.push('Susu');
daftarBelanja.push('Roti');
console.log('\nSetelah tambah item:');
for (let i = 0; i < daftarBelanja.length; i++) {
    console.log(`${i + 1}. ${daftarBelanja[i]}`);
}
const itemDihapus = daftarBelanja.shift();
console.log('\nItem yang dihapus:', itemDihapus);
const adaSusu = daftarBelanja.includes('Susu');
console.log('Apakah "Susu" ada di daftar?', adaSusu);
console.log('Jumlah item akhir:', daftarBelanja.length);