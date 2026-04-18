class Mahasiswa {
// Constructor: dipanggil saat 'new Mahasiswa(...)' dieksekusi
    constructor(nama, nim, jurusan) {
        this.nama = nama; // property instance
        this.nim = nim;
        this.jurusan = jurusan;
        this.nilai = []; // array kosong saat dibuat
}
// Method: function milik setiap instance
tambahNilai(nilai) {
    this.nilai.push(nilai);
}
hitungRataRata() {
    if (this.nilai.length === 0) return 0;
    const total = this.nilai.reduce((sum, n) => sum + n, 0);
    return (total / this.nilai.length).toFixed(2);
}
getInfo() {
    return `[${this.nim}] ${this.nama} - ${this.jurusan} | IPK: ${this.hitungRataRata()}`;
    }
}
// --- 2. Membuat instance dari class ---
const mhs1 = new Mahasiswa('Budi Santoso', '2021001', 'Informatika');
const mhs2 = new Mahasiswa('Siti Rahayu', '2021002', 'Sistem Informasi');
const mhs3 = new Mahasiswa('Ahmad Fauzi', '2021003', 'Informatika');
// Tambahkan nilai ke setiap mahasiswa
mhs1.tambahNilai(85); mhs1.tambahNilai(90); mhs1.tambahNilai(78);
mhs2.tambahNilai(92); mhs2.tambahNilai(88); mhs2.tambahNilai(95);
mhs3.tambahNilai(70); mhs3.tambahNilai(75);
console.log('=== Data Mahasiswa ===');
console.log(mhs1.getInfo());
console.log(mhs2.getInfo());
console.log(mhs3.getInfo());
class Kalkulator {
    static tambah(a, b) { return a + b; }
    static kurang(a, b) { return a - b; }
    static kali(a, b) { return a * b; }
    static bagi(a, b) {
        if (b === 0) return 'Error: bagi nol';
        return a / b;
    }
}
console.log('\n=== Static Method ===');
console.log('10 + 5 =', Kalkulator.tambah(10, 5));
console.log('10 * 5 =', Kalkulator.kali(10, 5));
console.log('10 / 0 =', Kalkulator.bagi(10, 0));
class Lingkaran {
    constructor(jariJari) {
        this._jariJari = jariJari; // konvensi _ = private
    }
    get jariJari() { return this._jariJari; }
    get luas() { return (Math.PI * this._jariJari ** 2).toFixed(2); }
    get keliling() { return (2 * Math.PI * this._jariJari).toFixed(2); }
set jariJari(nilai) {
        if (nilai <= 0) throw new Error('Jari-jari harus positif!');
        this._jariJari = nilai;
    }
}
console.log('\n=== Getter & Setter ===');
const l = new Lingkaran(7);
console.log('Jari-jari:', l.jariJari); 
console.log('Luas :', l.luas);
console.log('Keliling :', l.keliling); 
l.jariJari = 10; 
console.log('Setelah diubah - Luas:', l.luas);
//latihan
console.log('\n=== LATIHAN ===');
class BankAccount {
    constructor(namaPemilik, saldoAwal) {
        this.namaPemilik = namaPemilik;
        this.saldo = saldoAwal;  // cukup satu variabel saldo
    }

    setor(jumlah) {
        if (jumlah <= 0) {
            console.log('ERROR! Jumlah harus positif!');
            return false;
        }
        this.saldo += jumlah;  // pakai this.saldo
        console.log(`Berhasil setor Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
        return true;
    }

    tarik(jumlah) {
        if (jumlah <= 0) {
            console.log('ERROR! Jumlah harus positif!');
            return false;
        }
        if (jumlah > this.saldo) {  // pakai this.saldo
            console.log('Saldo tidak mencukupi!');
            return false;
        }
        this.saldo -= jumlah;  // pakai this.saldo
        console.log(`Berhasil tarik Rp${jumlah}. Saldo sekarang: Rp${this.saldo}`);
        return true;
    }

    cekSaldo() {
        return `Pemilik: [${this.namaPemilik}] | Saldo: Rp${this.saldo}`;  // pakai this.saldo
    }

    static transfer(akun1, akun2, jumlah) {
        console.log(`\n--- Transfer Rp${jumlah} dari ${akun1.namaPemilik} ke ${akun2.namaPemilik} ---`);
        
        if (akun1.saldo >= jumlah) {
            akun1.tarik(jumlah);
            akun2.setor(jumlah);
            console.log(`Transfer berhasil!`);
        } else {
            console.log(`Transfer gagal! Saldo ${akun1.namaPemilik} tidak cukup.`);
        }
    }
}

// Contoh penggunaan
const akunAndi = new BankAccount('Andi', 0);
const akunBudi = new BankAccount('Budi', 0);

console.log(akunAndi.cekSaldo());
console.log(akunBudi.cekSaldo());

console.log('\nTest Setor normal:')
akunAndi.setor(100000);
console.log('Test Setor 0 (error):')
akunAndi.setor(0);
console.log('Test Setor jumlah negatif (error):')
akunAndi.setor(-5000);

console.log('\nTest tarik normal:')
akunAndi.tarik(50000);
console.log('Test tarik 0 (error):')
akunAndi.tarik(0);
console.log('Test tarik jumlah negatif:')
akunAndi.tarik(-10000);
console.log('Test tarik melebihi saldo:')
akunAndi.tarik(110000);

// Transfer
BankAccount.transfer(akunAndi, akunBudi, 150000);

console.log('\nSetelah transfer:');
console.log(akunAndi.cekSaldo());
console.log(akunBudi.cekSaldo());