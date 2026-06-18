
function bubbleSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length - 1; i++) {
        let sudahTerurut = true;
        for (let j = 0; j < a.length - i - 1; j++) {
            if (a[j] > a[j+1]) {
                [a[j], a[j+1]] = [a[j+1], a[j]];
                sudahTerurut = false;
            }
        }
        if (sudahTerurut) break; // optimasi early exit
    }
    return a;
}
function selectionSort(arr) {
    const a = [...arr];
    for (let i = 0; i < a.length - 1; i++) {
        let idxMin = i;
        for (let j = i+1; j < a.length; j++)
            if (a[j] < a[idxMin]) idxMin = j;
        if (idxMin !== i) [a[i], a[idxMin]] = [a[idxMin], a[i]];
    }
    return a;
}
function insertionSort(arr){
    const a = [...arr];
    for (let i = 1; i < a.length; i++) {
        const kunci = a[i];
        let j = i - 1;
        while (j > 0 && a[j] > kunci) {
            [a[j], a[j-1]] = [a[j-1], a[j]];
            j--;
        }
    }
    return a;
}
const contoh = [64, 34, 25, 12, 22, 11, 90];
console.log('Input :', contoh);
console.log('Bubble Sort :', bubbleSort(contoh));
console.log('Selection sort ', selectionSort(contoh));
console.log('Insertion Sort', insertionSort(contoh));

console.log('\n==== BenchMark ====');
const N = 5000;
const acak = Array.from({length:N}, ()=>Math.floor(Math.random()*N));
['bubbleSort','selectionSort','insertionSort'].forEach(nama => {
    const fn = {bubbleSort, selectionSort, insertionSort}[nama];
    const t = Date.now(); fn([...acak]); console.log(`${nama}: ${Date.now()-t} ms`);
});
console.log('\n====insertionSort pada data hampir terurut (n=5000)====');

const hampirTerurut= 
Array.from({lenght : N}, (_, i) => i).map((x,i) =>i%50===0?x+Math.floor(Math.random()*18):x);
let t = Date.now(); insertionSort(hampirTerurut); console.log('insertionSort:', Date.now()-t, 'ms(jauh lebih cepat!!)');

    
