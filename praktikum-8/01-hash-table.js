class HashMap {
    constructor(kapasitas = 53) {
        this.tabel = new Array(kapasitas);
        this.kapasitas = kapasitas;
        this.ukuran = 0;
    }

    _hash(key) {
        let hash = 0;
        const PRIME = 31;
        for (let i = 0; i < Math.min(key.length, 100); i++) {
            hash = (hash * PRIME + key.charCodeAt(i)) % this.kapasitas;
        }
        return hash;
    }

    set(key, value) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) this.tabel[idx] = [];
        const existing = this.tabel[idx].find(([k]) => k === key);
        if (existing) { existing[1] = value; return; }
        this.tabel[idx].push([key, value]);
        this.ukuran++;
    }

    get(key) {
        const idx = this._hash(key);
        if (!this.tabel[idx]) return undefined;
        const pair = this.tabel[idx].find(([k]) => k === key); // ✅ find, bukan findIndex
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

    has(key) { return this.get(key) !== undefined; }

    keys() {
        const result = [];
        for (const bucket of this.tabel)
            if (bucket) bucket.forEach(([k]) => result.push(k));
        return result;
    }

    values() {
        const result = [];
        for (const bucket of this.tabel)
            if (bucket) bucket.forEach(([, v]) => result.push(v));
        return result; // 
    }

    infoDistribusi() {
        let terisi = 0, maks = 0;
        for (const b of this.tabel) {
            if (b && b.length) { terisi++; if (b.length > maks) maks = b.length; }
        }
        console.log(`Kapasitas: ${this.kapasitas}, Terisi: ${terisi}, Load factor: ${(this.ukuran / this.kapasitas).toFixed(2)}, Max chain: ${maks}`);
    }
}

const map = new HashMap();
['javascript', 'python', 'java', 'c++', 'rust', 'go', 'typescript'].forEach((lang, i) => map.set(lang, i + 1));

console.log('=== HashMap Demo ===');
console.log('get(java) :', map.get('java'));
console.log('get(kotlin) :', map.get('kotlin'));
console.log('has(python) :', map.has('python'));
map.delete('java');                               
console.log('Setelah dihapus java:', map.get('java')); 
console.log('Keys:', map.keys());
map.infoDistribusi();