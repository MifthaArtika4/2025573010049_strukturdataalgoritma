function jumlahArray(arr) {
    let total = 0; 
     for (const x of arr) total += x;
     return total;
}
function duplikasiArray(arr) {
    const baru = [];
    for (const x of arr) baru.push(x * 2);
    return baru;
}
function faktorialRekursif(n) {
    if (n <= 1) return 1;
    return n * faktorialRekursif(n - 1); 
}
function faktorialIteratif(n) {
    let hasil = 1;
    for (let i = 2; i <= n; i++) hasil *= i; 
    return hasil;
}
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Jumlah array :', jumlahArray(arr)); 
console.log('Duplikasi array:', duplikasiArray(arr)); 
console.log('Faktorial 10 rekursif :', faktorialRekursif(10));
console.log('Faktorial 10 iteratif :', faktorialIteratif(10));
function hitungUnik(arr) {
    const seen = new Set(); 
    for (const x of arr) seen.add(x);
    return seen.size;
}
const dataAcak = [1,2,3,2,1,4,5,3,6,4,7];
console.log('Elemen unik:', hitungUnik(dataAcak)); 
//big 0: 0(n^2) - Karena ada loop di dalam loop
//space complexity: 0(1) - Tidak menggunakan memori tambahan

//latihan
function cariPasanganLambat(arr, target){
    for (let i = 0; i < arr.length; i++){
        for (let j= i +1; j < arr.length; j++){
            if (arr[i] + arr[j] === target){
                return [arr[i], arr[j]];
            }
        }
    }
    return null;
}

//Big 0: 0(n) - hanya satu kali iterasi melewati array
//Space Complexity: 0(n) - Memori tambahan untuk menyimpan angka di dalam set
function cariPasanganCepat(arr,target){
    const seen = new Set();
    for (let num of arr){
        let complement = target - num;
        if (seen.has(complement)){
            return [complement, num];
        }
        seen.add(num);
    }
    return null;
}

const testArr = [2,7,11,15];
const target=9;

console.log("Hasil Lambat:", cariPasanganLambat(testArr, target));
console.log("Hasil Cepat :", cariPasanganCepat(testArr, target));

const besarArray = 50000;
const angkaAcak = Array.from({ length: besarArray }, () => Math.floor(Math.random() * 100000));
const targetZonk = -1; // Target yang pasti tidak ada agar loop berjalan maksimal

console.log(`\nMenguji dengan ${besarArray} data`);

const startLambat = Date.now();
cariPasanganLambat(angkaAcak, targetZonk);
console.log(`Waktu cariPasanganLambat: ${Date.now() - startLambat}ms`);

const startCepat = Date.now();
cariPasanganCepat(angkaAcak, targetZonk);
console.log(`Waktu cariPasanganCepat: ${Date.now() - startCepat}ms`);