const mahasiswa = {
    nama: 'Miftha Artika Yahdini',
    umur: 20,
    jurusan: 'Teknik Informatika',
    ipk: 3.75,
    aktif: true
};

console.log('===Akses Property===');
console.log('Nama : ', mahasiswa.nama);
console.log('Jurusan : ', mahasiswa['jurusan']);
const keyYangDicari = 'ipk';
console.log('IPK :', mahasiswa[keyYangDicari]);
mahasiswa.email = 'budi@email';
mahasiswa.umur = 21;
console.log('\nSetelah diubah :', mahasiswa);
delete mahasiswa.aktif;
console.log('Setelah delete :', mahasiswa);

const dosen = {
    nama: 'Dr. Ahmad Fauzi',
    mataKuliah: 'Struktur Data',
    pengalaman: '10',

    perkenalan() {
        return `halo, saya ${this.nama}, mengajar ${this.mataKuliah}.`;
    },

statusSenior(){
    if (this.pengalaman >= 10){
        return `${this.nama} adalah dosen senior.`;
    }
    return `${this.nama} adalah dosen junior.`;
    }
};  
console.log('\n=== Method Object ===');
console.log(dosen.perkenalan());
console.log(dosen.statusSenior());
console.log('\n=== Iterasi Object ===');
for (const key in dosen) {
    if (typeof dosen[key] !== 'function') {
        console.log(` ${key}: ${dosen[key]}`);
    }
}

console.log('keys :', Object.keys(mahasiswa));
console.log('Values :', Object.values(mahasiswa));

//latihan
const buku ={
    judul : 'Marveluna',
    pengarang : 'Miftha Artika Yahdini',
    tahunTerbit : '2020',
    harga : '200000',
    tersedia : 'true',

info(){
    return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia" : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}

const koleksiBuku = [
    {
        judul: 'Bumi Manusia',
        pengarang: 'Hasta Mitra',
        tahunTerbit: 2005,
        harga: '150000',
        tersedia :true,
        info(){
            return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "tersedia" : "Tidak Tersedia"}`;
        },
        diskon(persen) {
            return this.harga *(1 - persen / 100);
        }


},
{
    judul: 'Laskar Pelangi',
    pengarang: 'Andrea Hirata',
    tahunTerbit: '2005',
    harga : 120000,
    tersedia: false,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
},
{
    judul: 'Dasar phython',
    pengarang: 'Yahdini',
    tahunTerbit: '2021', 
    harga: '1500000',
    tersedia: true,
    info(){
        return `${this.judul} oleh ${this.pengarang} (${this.tahunTerbit}) - Rp${this.harga} - ${this.tersedia ? "Tersedia " : "Tidak Tersedia"}`;
    },
    diskon(persen){
        return this.harga * (1 - persen / 100);
    }
}];
koleksiBuku.forEach(buku => {
    console.log(buku.info());
});

console.log('Buku tersedia (filter):')
const bukuTersedia = koleksiBuku.filter(buku => buku.tersedia === true);
console.log('Total buku tersedia: ' + bukuTersedia.length + ' judul\n');
bukuTersedia.forEach(buku => {
    console.log(buku.info());
});