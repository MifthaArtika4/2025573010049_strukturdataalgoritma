const produk = {
    nama : 'Laptop Gaming',
    merk : 'TechBrand',
    harga : 12500000,
    stok : 15,
    garansi : '1 tahun',

};
const {nama, harga, stok} = produk;
console.log('===Object Destructing ===');
console.log(`${nama} | rp${harga.toLocaleString()} | Stok: ${stok}`);
const {nama: namaProduk, garansi: periodeGaransi} = produk;
console.log(`Prosuk : ${namaProduk}, Garansi : ${periodeGaransi}`);
const {warna = 'Tidak diketahui', stok: jumlahStok = 0} = produk;
console.log(`warna : ${warna} | Stok: ${jumlahStok}`);
const koordinat = [10, 25, ];
const [x, y, z] = koordinat;
console.log('\n=== Array Destructing ===');
console.log(`x=${x}, y=${y}, z=${z}`);
const [, kedua, ,] = [100, 200, 300, 400];
console.log('Elemen kedua:', );
let a = 'pertama', b = 'kedua';
console.log('Sebelum swap:', a, b);
[a, b] = [b, a];
console.log('Setelah swap :', a, b);
const buah = ['Apel', 'Mangga', 'Jeruk'];
const sayur = ['Bayam', 'Wortel'];
const salinanBuah = [...buah];
salinanBuah.push('Pisang');
console.log('\n=== spread operator===');
console.log('Asli :', buah);
console.log('Salinan :', salinanBuah);
const semuaMakanan = [...buah, ...sayur, 'Tempe'];
console.log('Gabungan :', semuaMakanan);
const profil = {nama : 'Siti', umur: 22, kota: 'Jakarta'};
const profilUpdate = {...profil, kota: 'Bandung', pekerjaan: 'Developer'};
console.log('Profil asli :', profil);
console.log('Profil Update :', profilUpdate);
function jumlahkanSemua(...angka) {
    console.log('Argumen diterima:', angka);
return angka.reduce((total, n) => total + n, 0);
}
console.log('\n=== Rest Parameter ===');
console.log('Total :', jumlahkanSemua(1, 2, 3));
console.log('Total :', jumlahkanSemua(10, 20, 30, 40, 50));
const [kepala,...ekor] = [1, 2, 3, 4, 5];
console.log('Kepala :', kepala);
console.log('Ekor :', ekor);

//latihan
console.log('\n=== Latihan ====')
const timA = ['Budi', 'Siti', 'Ahmad'];
const timB = ['Rina', 'Doni'];
const timGabungan = [...timA, ...timB, 'Zahra'];
const [kapten, ...anggota] = timGabungan;
console.log('Kapten :', kapten);
console.log('Anggota :', anggota);

const pengaturanDefault = {
    tema : 'terang',
    bahasa : 'id',
    notifikasi : true,
    fontSize : 14
}
console.log('Pengaturan Default :', pengaturanDefault);

const settingDefault ={
    bahasa : 'id',
    notifikasi : true
}

const pengaturanUser = {tema : 'gelap', ...settingDefault, fontSize : 16};
console.log('Pengaturan User :', pengaturanUser);
console.log('tema :', pengaturanUser.tema, 'font size :', pengaturanUser.fontSize);