//konstan
function fn_O1(n){
    return n + 1;
}
//linear
function fn_On(n){
    let sum = 0;
    for(let i = 0; i <= n; i++){
         sum++;
    }
    return sum;
}
//linear mitm 0 n Log n
function fn_OnLogn(n){
    let count =0;
    for(let i = 0; i <=n; i++){
        for(let j = 1; j <=n; j++);
    }
}
//kuadratik
function fn_On2(n){
    let count = 0;
    for(let i = 0; i <= n; i++){
        for(let j = 1; j <=n; j++){
            count++;
        }
    }
    return count;
}
function bechmarkSemua(ukuranData){
    ukuranData.forEach(n => {
        console.log(`\nUkuran Data: ${n}`);
        console.log('\n===konstan===');
        console.time('O(1)');
        fn_O1(n);
        console.timeEnd('O(1)');

        console.log('\n===Linear===');
        console.time('O(n)');
        fn_On(n);
        console.timeEnd('O(n)');

        console.log('\n===Linear mithm===');
        console.time('O(n log n)');
        fn_OnLogn(n);
        console.timeEnd('O(n log n)');

        console.log('\n===kuadratik===');
        console.time('O(n2)');
        fn_On2(n);
        console.timeEnd('O(n2)');

    });

}
bechmarkSemua([100, 500, 1000, 5000, 10000]);