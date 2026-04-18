class Kendaraan {
    constructor(merk, model, tahun) {
        this.merk = merk;
        this.model = model;
        this.tahun = tahun;
        this.kecepatanSaatIni = 0;
}
akselerasi(tambahan) {
    this.kecepatanSaatIni += tambahan;
    console.log(`${this.merk} ${this.model}: kecepatan ${this.kecepatanSaatIni} km/h`);
}
rem() {
    this.kecepatanSaatIni = 0;
    console.log(`${this.merk} ${this.model}: berhenti.`);
}
info() {
    return `${this.tahun} ${this.merk} ${this.model}`;
    }
}
class Mobil extends Kendaraan {
    constructor(merk, model, tahun, jumlahPintu) {
        super(merk, model, tahun);
        this.jumlahPintu = jumlahPintu; 
}
bunyikanKlakson() {
    console.log(`${this.merk}: Beep beep!`);
}
info() {
    const infoParent = super.info(); 
    return `${infoParent} (${this.jumlahPintu} pintu)`;
    }
}
class Motor extends Kendaraan {
    constructor(merk, model, tahun, jenisMotor) {
        super(merk, model, tahun);
        this.jenisMotor = jenisMotor;
}
wheelie() {
    if (this.kecepatanSaatIni > 50) {
        console.log(`${this.merk}: Wheelie!`);
} else {
        console.log('Kecepatan terlalu rendah untuk wheelie.');
}
}
info() {
        return `${super.info()} [${this.jenisMotor}]`;
}
}
const mobil = new Mobil('Toyota', 'Avanza', 2022, 4);
const motor = new Motor('Honda', 'CBR600RR', 2021, 'Sport');
console.log('=== Info Kendaraan ===');
console.log(mobil.info());
console.log(motor.info());
console.log('\n=== Aksi ===');
mobil.akselerasi(60); 
mobil.bunyikanKlakson();
motor.akselerasi(80);
motor.wheelie();
motor.rem();
console.log('\n=== instanceof ===');
console.log('mobil instanceof Mobil :', mobil instanceof Mobil);
console.log('mobil instanceof Kendaraan :', mobil instanceof Kendaraan); 
console.log('motor instanceof Mobil :', motor instanceof Mobil); 

console.log('\n=== Polymorphism ===');
const semuaKendaraan = [mobil, motor];
semuaKendaraan.forEach(k => console.log(k.info()));
//latihan
console.log('=== Latihan ====');
class Hewan {
    constructor(nama, suara){
        this.nama = nama;
        this.suara = suara;
    }
bersuara(){
    console.log(`${this.nama} berkata:${this.suara}`);
}
info(){
    return 'Nama: ' + this.nama + ', Umur: ' + this.umur + ' tahun';
}
}

class Anjing extends Hewan {
    constructor(nama, suara, jenis){
        super(nama, suara);
        this.jenis = jenis;
    }
fetch(){
    console.log (`${this.nama} mengambil bola!`);
}
info(){
    return super.info() + ' (jenis: anjing)';
    }
}
class Kucing extends Hewan{
    constructor(nama, suara, warna){
        super(nama, suara);
        this.warna = warna;
    }
    cakarSofa(){
        console.log(this.nama + ' mencakar sofa!');
    }
    bersuara(){
        super.bersuara();
        console.log('Purrr...');
    }
}
const anjing1 = new Anjing('Carly', 'Guk Guk', 'Golden Retriever');
const anjing2 = new Anjing('Rex', 'Woof Woof', 'German Shepherd');

const kucing1 = new Kucing('Milo', 'Meong', 'Oren');
const kucing2 = new Kucing('Luna', 'Miaw', 'Putih');

console.log('Instance Anjing:');
console.log('  - ' + anjing1.info());
console.log('  - ' + anjing2.info());

console.log('\nInstance Kucing:');
console.log('  - ' + kucing1.info());
console.log('  - ' + kucing2.info());

const daftarHewan = [anjing1, anjing2, kucing1, kucing2];
console.log('Total hewan dalam array: ' + daftarHewan.length + ' ekor');
console.log('Daftar: ' + daftarHewan.map(hewan => hewan.nama).join(', '));

console.log('\n--- Memanggil method info() untuk setiap hewan ---\n3');
daftarHewan.forEach(hewan => {
    console.log(hewan.info());
});

console.log('\n--- Memanggil method bersuara() untuk setiap hewan ---\n');
daftarHewan.forEach(hewan => {
    hewan.bersuara();
    console.log(''); // beri jarak
});

console.log('\n--- Method khusus Anjing (fetch) ---');
const daftarAnjing = [anjing1, anjing2];
daftarAnjing.forEach(anjing => {
    anjing.fetch();
});

console.log('\n--- Method khusus Kucing (cakarSofa) ---');
const daftarKucing = [kucing1, kucing2];
daftarKucing.forEach(kucing => {
    kucing.cakarSofa();
});