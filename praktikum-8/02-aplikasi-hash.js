function frekuensi(arr) {
    const map = new Map();
    for (const x of arr) map.set(x, (map.get(x) || 0) + 1);
    return map;
}

function adalahAnagram(s1, s2) {
    if (s1.length !== s2.length) return false;
    const freq = {};
    for (const c of s1) freq[c] = (freq[c] || 0) + 1;
    for (const c of s2) {
        if (!freq[c]) return false;
        freq[c]--;
    }
    return true;
}

function twoSum(arr, target) {              
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        const komplemen = target - arr[i];
        if (map.has(komplemen)) return [map.get(komplemen), i];
        map.set(arr[i], i);
    }
    return [];
}

function groupAnagram(kata) {               
    const map = new Map();
    for (const w of kata) {                 
        const key = w.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(w);
    }
    return [...map.values()];
}

function longestConsecutive(arr) {
    const set = new Set(arr);               
    let maks = 0;
    for (const x of set) {
        if (!set.has(x - 1)) {             
            let cur = x, panjang = 1;
            while (set.has(cur + 1)) { cur++; panjang++; }
            maks = Math.max(maks, panjang); 
        }
    }
    return maks;
}

console.log('=== Frequency Counter ===');
const arr = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
const freq = frekuensi(arr);
freq.forEach((v, k) => console.log(`${k} : ${v}x`));

console.log('\n=== Anagram ===');
console.log('(listen,silent):', adalahAnagram('listen', 'silent')); // ✅ 2 argumen
console.log('(hello,world):', adalahAnagram('hello', 'world'));

console.log('\n=== Two Sum ===');
console.log('[2,7,11,15], target=9 :', twoSum([2, 7, 11, 15], 9));
console.log('[3,2,4], target=6 :', twoSum([3, 2, 4], 6));

console.log('\n=== Group Anagram ===');
console.log(groupAnagram(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));

console.log('\n=== Longest Consecutive Sequence ===');
console.log([100, 4, 200, 1, 3, 2], '->', longestConsecutive([100, 4, 200, 1, 3, 2]));