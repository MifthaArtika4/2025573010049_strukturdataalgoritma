function adaDuplikatLambat(arr) {
    for (let i = 0; i < arr.length; i++)
    for (let j = i+1; j < arr.length; j++)
    if (arr[i] === arr[j]) return true;
    return false;
}
function adaDuplikatCepat(arr) {
const seen = new Set();
for (const x of arr) {
if (seen.has(x)) return true;
seen.add(x);
}
return false;
}
function frekuensiLambat(arr) {
const unik = [];
const hitung = [];
for (const x of arr) {
const idx = unik.indexOf(x); 
if (idx === -1) { unik.push(x); hitung.push(1); }
else hitung[idx]++;
}
return Object.fromEntries(unik.map((u,i) => [u, hitung[i]]));
}

function frekuensiCepat(arr) {
const counter = {};
for (const x of arr) counter[x] = (counter[x] || 0) + 1;
return counter;
}
const besar = Array.from({length: 20000}, () => Math.floor(Math.random() * 1000));
let t = Date.now();
adaDuplikatLambat(besar);
console.log('Duplikat LAMBAT O(n2):', Date.now()-t, 'ms');
t = Date.now();
adaDuplikatCepat(besar);
console.log('Duplikat CEPAT O(n) :', Date.now()-t, 'ms');
const kata = ['a','b','a','c','b','a','d'];
console.log('\nFrekuensi:', frekuensiCepat(kata));