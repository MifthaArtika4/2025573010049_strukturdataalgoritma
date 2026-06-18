function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache.has(key))  return cache.get(key);
        
        const hasil= fn.apply(this, args);
        cache.set(key, hasil);
        return hasil;
    };
}
function fibNaif(n) {
    if (n <= 1) return n;
    return fibNaif(n - 1) + fibNaif(n - 2);
}
const fibMemo = memoize(function(n) {
    if (n<=1) return n;
    return fibMemo(n-1) + fibMemo(n-2);
});
function fibIterasif(n){
    if (n <= 1) return n;
    let a = 0, b = 1;
    for (let i = 2; i <= n; i++) [a,b] = [b, a + b];
    
    return b;
}
console.log('==== Fibonacci Naif ====');
let t = Date.now(); fibNaif(38); console.log('Naif 0(2n):', Date.now() - t, 'ms'); 
t = Date.now(); fibMemo(38); console.log('Memo 0(n):', Date.now() - t, 'ms');
t = Date.now(); fibIterasif(38); console.log('Iteratif 0(n):', Date.now() - t, 'ms');
console.log('hasil fib (38):', fibIterasif(38));

const coinChangeMemo = memoize(function(jumlah, koin) {
    if (jumlah === 0) return 0;
    if (jumlah< 0) return Infinity;
    let min = Infinity;
    for (const k of koin) {
        const sub = coinChangeMemo(jumlah - k, koin);
        if (sub  + 1 < min) min = sub + 1; 
    }
    return min;

});
console.log('==== Coin Change ====');
const koin = [1, 5, 10, 25];
console.log('koin tersedia:', koin);
console.log('41 sen = min', coinChangeMemo(41, koin), 'koin');
console.log('30 sen = min', coinChangeMemo(30, koin), 'koin');
console.log('11 sen = min', coinChangeMemo(11, koin), 'koin ');

const lcsMemo = memoize(function(s1, s2, i=s1.length, j=s2.length-1) {
    if (i < 0 || j < 0) return 0;
    if (s1[i] === s2[j]) return 1 + lcsMemo(s1, s2, i - 1, j - 1);
    return Math.max(lcsMemo(s1, s2, i - 1, j), lcsMemo(s1, s2, i, j - 1));
});

console.log('==== Longest Common Subsequence ====');
console.log('LCS(ABCBDAB, BDCAB) =', lcsMemo('ABCBDAB', 'BDCAB'));
console.log('LCS(AGGTAB, GXTXAYB) =', lcsMemo('AGGTAB', 'GXTXAYB'));  