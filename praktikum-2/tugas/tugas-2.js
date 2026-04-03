const beratBadan = 43;
const tinggiBadan = 1.55;
BMI = beratBadan / (tinggiBadan * tinggiBadan);
let Kat = ''
if (BMI < 18.5){
    Kat = 'Kurus';
} else if (BMI < 24.9 && BMI > 18.5){
    Kat = 'Normal';
} else if (BMI < 29.9 && BMI >25.0){
    Kat = 'Kelebihan Berat Badan';
} else if (BMI >= 30.0){
    Kat = 'Obesitas';
} else{
    Kat = 'Data yang dimasukkan tidak valid!';
}
console.log('Berat:' + beratBadan + "kg" + " | " + 'Tinggi:' + tinggiBadan + "m" + " | " + 'BMI:' + BMI.toFixed(2) + " | " + "Kategori: " + Kat);