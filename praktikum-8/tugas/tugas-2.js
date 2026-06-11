
function subArrayJumlahK(arr, k) {
    const map = new Map();
    map.set(0, 1);   // prefix sum 0 sudah ada 1 kali (sebelum elemen pertama)

    let prefixSum = 0;
    let count     = 0;

    for (const x of arr) {
        prefixSum += x;

        if (map.has(prefixSum - k)) {
            count += map.get(prefixSum - k);
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1);
    }

    return count;
}
function subArrayJumlahK_Naif(arr, k) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        let sum = 0;
        for (let j = i; j < arr.length; j++) {
            sum += arr[j];
            if (sum === k) count++;
        }
    }
    return count;
}
function karakterPertamaUnik(s) {
    const freq = new Map();

    
    for (const c of s) {
        freq.set(c, (freq.get(c) || 0) + 1);
    }

    for (let i = 0; i < s.length; i++) {
        if (freq.get(s[i]) === 1) return i;
    }

    return -1;   // semua berulang
}

function karakterPertamaUnik_Naif(s) {
    for (let i = 0; i < s.length; i++) {
        let unik = true;
        for (let j = 0; j < s.length; j++) {
            if (i !== j && s[i] === s[j]) { unik = false; break; }
        }
        if (unik) return i;
    }
    return -1;
}


function topKFrequent(arr, k) {
    // Hitung frekuensi
    const freq = new Map();
    for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

    // Urutkan by frekuensi descending, ambil k teratas
    return [...freq.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, k)
        .map(([val]) => val);
}

function topKFrequent_Bucket(arr, k) {
    const freq   = new Map();
    for (const x of arr) freq.set(x, (freq.get(x) || 0) + 1);

    // Bucket: index = frekuensi, value = array elemen
    const bucket = new Array(arr.length + 1).fill(null).map(() => []);
    for (const [val, f] of freq) bucket[f].push(val);

    const result = [];
    for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
        result.push(...bucket[i]);
    }
    return result.slice(0, k);
}

function topKFrequent_Naif(arr, k) {
    const unik = [...new Set(arr)];
    unik.sort((a, b) => {
        const fa = arr.filter(x => x === a).length;
        const fb = arr.filter(x => x === b).length;
        return fb - fa;
    });
    return unik.slice(0, k);
}
function benchmark(label, fn, ...args) {
    const t0  = performance.now();
    const res = fn(...args);
    const t1  = performance.now();
    console.log(`  [${label}] hasil: ${JSON.stringify(res)} | waktu: ${(t1 - t0).toFixed(4)} ms`);
    return res;
}


// ────────────────────────────────────────────────────────────
//  Demo & Perbandingan
// ────────────────────────────────────────────────────────────

console.log('══════════════════════════════════════════');
console.log('  Klasik Hash Table            ');
console.log('══════════════════════════════════════════\n');

console.log('─── 1. subArrayJumlahK ───────────────────────');
console.log('Contoh: [1,1,1], k=2  → ekspektasi: 2');
benchmark('HashMap O(n) ', subArrayJumlahK,      [1,1,1], 2);
benchmark('Naif   O(n²) ', subArrayJumlahK_Naif, [1,1,1], 2);

console.log('\nContoh: [1,2,3], k=3  → ekspektasi: 2');
benchmark('HashMap O(n) ', subArrayJumlahK,      [1,2,3], 3);
benchmark('Naif   O(n²) ', subArrayJumlahK_Naif, [1,2,3], 3);
const bigArr = Array.from({ length: 10_000 }, () => Math.floor(Math.random() * 10) - 3);
console.log('\nBenchmark 10.000 elemen, k=5:');
benchmark('HashMap O(n) ', subArrayJumlahK,      bigArr, 5);
benchmark('Naif   O(n²) ', subArrayJumlahK_Naif, bigArr, 5);
console.log('\n─── 2. karakterPertamaUnik ───────────────────');
console.log("Contoh: 'leetcode'  → ekspektasi: 0 (l)");
benchmark('Map  O(n) ', karakterPertamaUnik,      'leetcode');
benchmark('Naif O(n²)', karakterPertamaUnik_Naif, 'leetcode');
console.log("\nContoh: 'loveleetcode'  → ekspektasi: 2 (v)");
benchmark('Map  O(n) ', karakterPertamaUnik,      'loveleetcode');
benchmark('Naif O(n²)', karakterPertamaUnik_Naif, 'loveleetcode');
console.log("\nContoh: 'aabb'  → ekspektasi: -1");
benchmark('Map  O(n) ', karakterPertamaUnik,      'aabb');
benchmark('Naif O(n²)', karakterPertamaUnik_Naif, 'aabb');
const bigStr = 'abcdefghij'.repeat(10_000) + 'z';
console.log('\nBenchmark string 100.001 karakter (unik di akhir):');
benchmark('Map  O(n) ', karakterPertamaUnik,      bigStr);
benchmark('Naif O(n²)', karakterPertamaUnik_Naif, bigStr);
console.log('\n─── 3. topKFrequent ──────────────────────────');
console.log('Contoh: [1,1,1,2,2,3], k=2  → ekspektasi: [1,2]');
benchmark('Sort   O(n log n)', topKFrequent,        [1,1,1,2,2,3], 2);
benchmark('Bucket O(n)      ', topKFrequent_Bucket, [1,1,1,2,2,3], 2);
benchmark('Naif   O(n² logn)', topKFrequent_Naif,   [1,1,1,2,2,3], 2);

console.log('\nContoh: [1], k=1  → ekspektasi: [1]');
benchmark('Sort   O(n log n)', topKFrequent,        [1], 1);
benchmark('Bucket O(n)      ', topKFrequent_Bucket, [1], 1);
const bigFreq = Array.from({ length: 50_000 }, () => Math.floor(Math.random() * 100));
console.log('\nBenchmark 50.000 elemen, k=5:');
benchmark('Sort   O(n log n)', topKFrequent,        bigFreq, 5);
benchmark('Bucket O(n)      ', topKFrequent_Bucket, bigFreq, 5);
benchmark('Naif   O(n² logn)', topKFrequent_Naif,   bigFreq, 5);
console.log('\n══════════════════════════════════════════════');
console.log('  Ringkasan Big O                              ');
console.log('══════════════════════════════════════════════');
console.log(`
┌──────────────────────────┬───────────────┬───────────────┐
│ Fungsi                   │ Solusi Kita   │ Naif          │
├──────────────────────────┼───────────────┼───────────────┤
│ subArrayJumlahK          │ O(n)          │ O(n²)         │
│ karakterPertamaUnik      │ O(n)          │ O(n²)         │
│ topKFrequent (sort)      │ O(n log n)    │ O(n² log n)   │
│ topKFrequent (bucket)    │ O(n)          │ O(n² log n)   │
└──────────────────────────┴───────────────┴───────────────┘
`);

console.log('✅ Selesai.');