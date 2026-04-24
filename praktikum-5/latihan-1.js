function fungsiA(n){
    return n * 2;
} //Big 0: 0(1) - Hanya satu operasi aritmatika

function fungsiB(n){
    for (let i=0; i<n; i++){
        for (let j=0; j<n; j++){
            console.log(i,j);
        }
    }
} //Big 0: 0(n^2) - perulangan bersarang n * n

function fungsiC(n){
    for (let i=1; i<n; i*=2){
        console.log(i);
    }
} //Big 0: 0(log n) - Iterasi meningkat secara eksponensial (i*2)

function fungsiD(n){
    const arr = Array.from({length: n}, (_, i) => i);
    arr.forEach(x => {
        arr.forEach(y => {
            arr.forEach(z => {
                console.log(x,y,z);
            });
        });
    });
} // Big O: O(n^3) - Tiga lapis perulangan pada array berukuran n

function hitungKompleksitas(n, fn){
    const startTime = Date.now();
    fn(n);
    const endTime = Date.now();
    const duration = endTime - startTime;

    console.log(`Fungsi: ${fn.name} | n: ${n} | Waktu: ${duration}ms`);
}

const n = 1000;

console.log("Hasil pengukuran waktu");
hitungKompleksitas(n, fungsiA);
hitungKompleksitas(n, fungsiB);
hitungKompleksitas(n, fungsiC);
hitungKompleksitas(n, fungsiD);
