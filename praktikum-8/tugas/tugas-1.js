
const TOMBSTONE = Symbol('terhapus');

class HashMapLinearProbing {
    constructor(kapasitas = 17) {
        this.kapasitas = kapasitas;
        this.tabel    = new Array(kapasitas).fill(null);
        this.ukuran   = 0;          // jumlah elemen aktif
        this.LOAD_MAX = 0.7;
    }
    _hash(key, kapasitas = this.kapasitas) {
        let hash = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % kapasitas;
        }
        return hash;
    }
    _loadFactor() {
        return this.ukuran / this.kapasitas;
    }
    _resize() {
        const kapasitasBaru = this.kapasitas * 2;
        const tabelLama     = this.tabel;

        this.kapasitas = kapasitasBaru;
        this.tabel     = new Array(kapasitasBaru).fill(null);
        this.ukuran    = 0;

        for (const slot of tabelLama) {
            // Lewati slot kosong dan tombstone
            if (slot !== null && slot !== TOMBSTONE) {
                this.set(slot[0], slot[1]);
            }
        }
        console.log(`[resize] kapasitas baru: ${kapasitasBaru}`);
    }

    set(key, value) {
        // Resize jika load factor sudah terlalu tinggi
        if (this._loadFactor() >= this.LOAD_MAX) this._resize();

        let idx         = this._hash(key);
        let firstTomb   = -1;   // catat tombstone pertama yang ditemui

        for (let i = 0; i < this.kapasitas; i++) {
            const pos  = (idx + i) % this.kapasitas;
            const slot = this.tabel[pos];

            if (slot === null) {
                // Slot kosong → pakai tombstone dulu kalau ada
                const target = firstTomb !== -1 ? firstTomb : pos;
                this.tabel[target] = [key, value];
                this.ukuran++;
                return;
            }

            if (slot === TOMBSTONE) {
                if (firstTomb === -1) firstTomb = pos;
                continue;
            }

            if (slot[0] === key) {
                // Update nilai
                slot[1] = value;
                return;
            }
        }

        if (firstTomb !== -1) {
            this.tabel[firstTomb] = [key, value];
            this.ukuran++;
        }
    }

    get(key) {
        let idx = this._hash(key);

        for (let i = 0; i < this.kapasitas; i++) {
            const pos  = (idx + i) % this.kapasitas;
            const slot = this.tabel[pos];

            if (slot === null)        return undefined;   // pasti tidak ada
            if (slot === TOMBSTONE)   continue;           // lewati, terus cari
            if (slot[0] === key)      return slot[1];
        }
        return undefined;
    }

    delete(key) {
        let idx = this._hash(key);

        for (let i = 0; i < this.kapasitas; i++) {
            const pos  = (idx + i) % this.kapasitas;
            const slot = this.tabel[pos];

            if (slot === null)        return false;
            if (slot === TOMBSTONE)   continue;
            if (slot[0] === key) {
                this.tabel[pos] = TOMBSTONE;  // tandai sebagai 'terhapus'
                this.ukuran--;
                return true;
            }
        }
        return false;
    }

    has(key) { return this.get(key) !== undefined; }

    keys() {
        return this.tabel
            .filter(s => s !== null && s !== TOMBSTONE)
            .map(([k]) => k);
    }

    values() {
        return this.tabel
            .filter(s => s !== null && s !== TOMBSTONE)
            .map(([, v]) => v);
    }
    infoDistribusi() {
        let terisi = 0, tomb = 0;
        for (const s of this.tabel) {
            if (s !== null && s !== TOMBSTONE) terisi++;
            else if (s === TOMBSTONE)          tomb++;
        }
        console.log(
            `[LinearProbing] Kapasitas: ${this.kapasitas} | ` +
            `Elemen aktif: ${this.ukuran} | ` +
            `Tombstone: ${tomb} | ` +
            `Load factor: ${this._loadFactor().toFixed(2)}`
        );
    }
}
class HashMapChaining {
    constructor(kapasitas = 17) {
        this.tabel    = new Array(kapasitas);
        this.kapasitas = kapasitas;
        this.ukuran   = 0;
    }
    _hash(key) {
        let hash = 0, PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++)
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        return hash;
    }
    set(key, value) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) this.tabel[idx] = [];
        const ex = this.tabel[idx].find(([k]) => k === key);
        if (ex) { ex[1] = value; return; }
        this.tabel[idx].push([key, value]);
        this.ukuran++;
    }
    get(key) {
        const idx  = this._hash(key);
        const pair = this.tabel[idx]?.find(([k]) => k === key);
        return pair ? pair[1] : undefined;
    }
    delete(key) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) return false;
        const i = this.tabel[idx].findIndex(([k]) => k === key);
        if (i === -1) return false;
        this.tabel[idx].splice(i, 1);
        this.ukuran--;
        return true;
    }
    infoDistribusi() {
        let terisi = 0, maks = 0;
        for (const b of this.tabel) {
            if (b?.length) { terisi++; if (b.length > maks) maks = b.length; }
        }
        console.log(
            `[Chaining]     Kapasitas: ${this.kapasitas} | ` +
            `Elemen aktif: ${this.ukuran} | ` +
            `Bucket terisi: ${terisi} | ` +
            `Max chain: ${maks} | ` +
            `Load factor: ${(this.ukuran / this.kapasitas).toFixed(2)}`
        );
    }
}
const bahasa = [
    'javascript','python','java','c++','rust',
    'go','typescript','kotlin','swift','ruby',
    'php','haskell','elixir','scala','dart'
];

console.log('══════════════════════════════════════════');
console.log('  Tugas 1 – HashMap: Linear Probing Demo  ');
console.log('══════════════════════════════════════════\n');

const lp = new HashMapLinearProbing(7);  // kapasitas kecil → resize akan terpicu
bahasa.forEach((lang, i) => lp.set(lang, i + 1));

console.log('--- Set & Get ---');
console.log('get(python)     :', lp.get('python'));
console.log('get(rust)       :', lp.get('rust'));
console.log('get(fortran)    :', lp.get('fortran'));   // undefined

console.log('\n--- Has ---');
console.log('has(kotlin)     :', lp.has('kotlin'));
console.log('has(cobol)      :', lp.has('cobol'));

console.log('\n--- Delete (Tombstone) ---');
console.log('delete(java)    :', lp.delete('java'));
console.log('get(java) setelah delete :', lp.get('java'));  // undefined
console.log('delete(java) lagi        :', lp.delete('java'));  // false

console.log('\n--- Update ---');
lp.set('python', 999);
console.log('get(python) setelah update:', lp.get('python'));

console.log('\n--- Keys ---');
console.log('Keys:', lp.keys().sort());

console.log('\n--- Info Distribusi ---');
lp.infoDistribusi();

console.log('\n══════════════════════════════════════════');
console.log('  Perbandingan: LinearProbing vs Chaining  ');
console.log('══════════════════════════════════════════\n');

const lpComp = new HashMapLinearProbing(17);
const chComp = new HashMapChaining(17);

const N   = 1000;
const data = Array.from({ length: N }, (_, i) => [`key${i}`, i]);
let t0 = performance.now();
data.forEach(([k, v]) => lpComp.set(k, v));
let t1 = performance.now();
data.forEach(([k, v]) => chComp.set(k, v));
let t2 = performance.now();
console.log(`Set ${N} elemen:`);
console.log(`  LinearProbing : ${(t1 - t0).toFixed(3)} ms`);
console.log(`  Chaining      : ${(t2 - t1).toFixed(3)} ms`);
t0 = performance.now();
data.forEach(([k]) => lpComp.get(k));
t1 = performance.now();
data.forEach(([k]) => chComp.get(k));
t2 = performance.now();
console.log(`\nGet ${N} elemen:`);
console.log(`  LinearProbing : ${(t1 - t0).toFixed(3)} ms`);
console.log(`  Chaining      : ${(t2 - t1).toFixed(3)} ms`);
t0 = performance.now();
data.slice(0, 500).forEach(([k]) => lpComp.delete(k));
t1 = performance.now();
data.slice(0, 500).forEach(([k]) => chComp.delete(k));
t2 = performance.now();
console.log(`\nDelete 500 elemen:`);
console.log(`  LinearProbing : ${(t1 - t0).toFixed(3)} ms`);
console.log(`  Chaining      : ${(t2 - t1).toFixed(3)} ms`);
console.log('\n--- Distribusi Akhir ---');
lpComp.infoDistribusi();
chComp.infoDistribusi();

console.log('\n Selesai.');