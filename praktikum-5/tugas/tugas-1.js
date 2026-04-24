function intersectionLambat(arr1, arr2) {
    const result = [];
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                result.push(arr1[i]);
                break;
            }
        }
    }
    return result;
}

function intersectionCepat(arr1, arr2) {
    const set = new Set(arr2);
    return arr1.filter(x => set.has(x));
}

function kelompokAnagram(arr) {
    const din = {};
    for (let kata of arr) {
        const key = kata.split('').sort().join('');
        if (!din[key]) {
            din[key] = [];
        }
        din[key].push(kata);
    }
    return Object.values(din);
}

function tripletLambat(arr) {
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (arr[i] ** 2 + arr[j] ** 2 === arr[k] ** 2) {
                    return true;
                }
            }
        }
    }
    return false;
}

function tripletCepat(arr) {
    arr = arr.map(x => x * x).sort((a, b) => a - b);

    for (let c = arr.length - 1; c >= 2; c--) {
        let left = 0;
        let right = c - 1;

        while (left < right) {
            if (arr[left] + arr[right] === arr[c]) {
                return true;
            } else if (arr[left] + arr[right] < arr[c]) {
                left++;
            } else {
                right--;
            }
        }
    }
    return false;
}

// tes
console.log(intersectionLambat([1,2,3], [2,3,4]));
console.log(intersectionCepat([1,2,3], [2,3,4]));

console.log(kelompokAnagram(['eat','tea','tan','ate','nat','bat']));

console.log(tripletLambat([3,4,5]));
console.log(tripletCepat([3,4,5]));

// ukur waktu
function ukurWaktu(fn, ...args) {
    const mulai = Date.now();
    fn(...args);
    const akhir = Date.now();
    console.log(`${fn.name}: ${akhir - mulai} ms`);
}

// data besar
const arrBesar = Array.from({ length: 5000 }, () =>
    Math.floor(Math.random() * 1000)
);

ukurWaktu(intersectionLambat, arrBesar, arrBesar);
ukurWaktu(intersectionCepat, arrBesar, arrBesar);
ukurWaktu(tripletLambat, arrBesar);
ukurWaktu(tripletCepat, arrBesar);