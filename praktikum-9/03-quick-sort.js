function quickSort(arr){
    if (arr.length <= 1) return arr;
    const pivotIdx = Math.floor(arr.length / 2);
    const pivot= arr[pivotIdx];
    const kiri = arr.filter((x, i) => i !== pivotIdx && x <= pivot);
    const kanan = arr.filter((x, i) => i !== pivotIdx && x > pivot);
    return [...quickSort(kiri), pivot, ...quickSort(kanan)];
}
function partisi(arr, lo, hi) {
    const pivot = arr[hi];
    let i = lo - 1;
    for (let j = lo; j < hi; j++) {
        if (arr[j] <= pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i+1], arr[hi]] = [arr[hi], arr[i+1]];
    return i+1;
}

function quickSortInPlace(arr, lo=0, hi=arr.length-1) {
    if (lo < hi) {
         const p = partisi(arr, lo, hi);
         quickSortInPlace(arr, lo, p - 1);
         quickSortInPlace(arr, p + 1, hi);
    }
    return arr;
}
const N = 100_000;
const data = Array.from({lenght: N}, ()=>Math.floor(Math.random()*N));
console.log('=== Quick Sort ===');
console.log(quickSort([64, 34, 25, 12, 11, 90]));
console.log(`quickSort (${N}: $(Date.now()-t), ms`);

console.log('\n===BenchMark=====');
let t = Date.now();
const a1 = [...data]; quickSort(a1);
console.log('quickSort:', Date.now()-t, 'ms');
t = Date.now();
const a2 = [...data]; quickSortInPlace(a2);
console.log('quickSortInPlace(${N}):', Date.now()-t, 'ms');
t = Date.now();
const a3 = [...data]; a3. sort((a,b) => a-b);
console.log(`Array.sort(builtin)(${N}):, Date.now()-t, ms`);

console.log('\n=== Worst Case Sort ====');
const terurut = Array.from({length: N}, (_, i) => i);
t = Date.now();
console.log('(Dilewati untuk menghidari stack overflow pada n=10000');
console.log('ini menujukan pentingnya strategis pemilihan pivot');