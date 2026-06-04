// ========== NODE & QUEUE ==========
class Node {
    constructor(d) { this.data = d; this.next = null; }
}
class Queue {
    constructor() { this.head = null; this.tail = null; this.size = 0; }
    enqueue(data) {
        const n = new Node(data);
        if (!this.tail) { this.head = this.tail = n; }
        else { this.tail.next = n; this.tail = n; }
        this.size++;
    }
    dequeue() {
        if (this.isEmpty()) return null;
        const v = this.head.data;
        this.head = this.head.next;
        if (!this.head) this.tail = null;
        this.size--;
        return v;
    }
    front()   { return this.head ? this.head.data : null; }
    isEmpty() { return this.size === 0; }
    print() {
        let s = 'FRONT ->', cur = this.head;
        while (cur) { s += ` [${cur.data.nama}]`; cur = cur.next; }
        console.log(s, '<- BACK');
    }
}

// ========== CLASS PASIEN ==========
class Pasien {
    constructor(id, nama, prioritas) {
        this.id          = id;
        this.nama        = nama;
        this.prioritas   = prioritas; // 'darurat' | 'biasa'
        this.waktuDaftar = new Date().toLocaleTimeString('id-ID');
    }
    toString() {
        return `[${this.prioritas.toUpperCase()}] ${this.nama} (ID:${this.id}, ${this.waktuDaftar})`;
    }
}

// ========== CLASS ANTRIANRS ==========
class AntrianRS {
    constructor() {
        this.antrianDarurat = new Queue();
        this.antrianBiasa   = new Queue();
    }

    daftar(pasien) {
        if (pasien.prioritas === 'darurat') {
            this.antrianDarurat.enqueue(pasien);
        } else {
            this.antrianBiasa.enqueue(pasien);
        }
        console.log(`  Terdaftar: ${pasien}`);
    }

    layani() {
        let pasien = null;
        if (!this.antrianDarurat.isEmpty()) {
            pasien = this.antrianDarurat.dequeue();
        } else if (!this.antrianBiasa.isEmpty()) {
            pasien = this.antrianBiasa.dequeue();
        }
        if (pasien) {
            console.log(`  Dilayani : ${pasien}`);
        } else {
            console.log('  Tidak ada pasien dalam antrian.');
        }
        return pasien;
    }

    tampilkanAntrian() {
        console.log('\n  --- Status Antrian ---');
        process.stdout.write('  DARURAT : ');
        this.antrianDarurat.print();
        process.stdout.write('  BIASA   : ');
        this.antrianBiasa.print();
        console.log(`  Total   : ${this.antrianDarurat.size + this.antrianBiasa.size} pasien\n`);
    }

    isEmpty() {
        return this.antrianDarurat.isEmpty() && this.antrianBiasa.isEmpty();
    }
}

// ========== SIMULASI ==========
const NAMA_ACAK = ['Andi','Budi','Citra','Dewi','Erik',
                   'Fani','Gilang','Hana','Irfan','Joko'];

const rs = new AntrianRS();

console.log('=== Pendaftaran 10 Pasien Acak ===');
NAMA_ACAK.forEach((nama, i) => {
    const prioritas = Math.random() < 0.4 ? 'darurat' : 'biasa';
    rs.daftar(new Pasien(i + 1, nama, prioritas));
});

rs.tampilkanAntrian();

console.log('=== Melayani Semua Pasien ===');
while (!rs.isEmpty()) {
    rs.layani();
}
console.log('\n  Semua pasien telah dilayani.');