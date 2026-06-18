function merge(kiri, kanan){
    const hasil = [];
    let i = 0, j = 0;
    while(i < kiri.length && j < kanan.length){
        if(kiri[i] < kanan[j]) hasil.push(kiri[i++]);
        else hasil.push(kanan[j++]);
        }
        return [...hasil, ...kiri.slice(i), ...kanan.slice(j)];
    }
    function mergeSort(arr){
        if (arr.length <= 1) return arr;
        const tengah = Math.floor(arr.length / 2);
        const kiri = mergeSort(arr.slice(0, tengah));
        const kanan = mergeSort(arr.slice(tengah));
        return merge(kiri, kanan);
    }
    let depth = 0;
    function mergeSortViz(arr){
        const pad = ' '.repeat(depth);
        console.log(`${pad}DIVIDE: [${arr}]`);
        if (arr.length <= 1 ) return arr;
        const mid = Math.floor(arr.length / 2);
        depth++;
        const L = mergeSortViz(arr.slice(0, mid));
        const R = mergeSortViz(arr.slice(mid));
        depth--;
        const merged = merge(L, R);
        console.log(`${pad}MERGE: [${L}] + [${R}] = [${merged}]`);
        return merge(L, R);
    }
    console.log('=== Merge Sort ===');
    mergeSortViz([38, 27, 43, 3, 9]);
    console.log('\n=== Merge Sort Naif ===');
    const N = 100_000;
    const acak = Array.from({length:N}, ()=>Math.floor(Math.random()*N));
    let t = Date.now();
    const sorted = mergeSort(acak);
    console.log(`mergeSort(${N}): elemen): Date.now()-t, ms`);
    console.log('terurut?', sorted <= sorted[1] && sorted[N-2]<=sorted[N-1]);