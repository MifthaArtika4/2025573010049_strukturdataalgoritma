const dataMahasiswa = [
    { nama: 'Miftha', nilai: 90 },
    { nama: 'Artika', nilai: 60 },
    { nama: 'Yahdini', nilai: 75 },
    { nama: 'Alhadi', nilai: 30 },
    { nama: 'Azumi', nilai: 86 },
    { nama: 'Safa', nilai: 85 }
];

function hitungStatistik(arrMahasiswa) {
    const total = arrMahasiswa.length;  // Perbaiki typo
    const totalNilai = arrMahasiswa.reduce((sum, mhs) => sum + mhs.nilai, 0);
    const rataRata = totalNilai / total;
    const nilaiTertinggi = arrMahasiswa.reduce((max, mhs) => mhs.nilai > max ? mhs.nilai : max, arrMahasiswa[0].nilai);
    const nilaiTerendah = arrMahasiswa.reduce((min, mhs) => mhs.nilai < min ? mhs.nilai : min, arrMahasiswa[0].nilai);
    
    return { total, rataRata, nilaiTertinggi, nilaiTerendah };
}

function filterLulus(arrMahasiswa, batasLulus) {
    return arrMahasiswa.filter(mhs => mhs.nilai >= batasLulus);
}

function tambahGrade(arrMahasiswa) {
    return arrMahasiswa.map(mhs => {
        let grade = "";
        if (mhs.nilai >= 85 && mhs.nilai <= 100) grade = "A";
        else if (mhs.nilai >= 75) grade = "B";
        else if (mhs.nilai >= 65) grade = "C";
        else if (mhs.nilai >= 50) grade = "D";
        else grade = "E";
        
        return {
            nama: mhs.nama,
            nilai: mhs.nilai,
            grade: grade
        };
    });
}


const statistik = hitungStatistik(dataMahasiswa);

console.log("=== Statistik ===");
console.log(`Total: ${statistik.total}`);
console.log(`Rata-rata: ${statistik.rataRata.toFixed(2)}`);
console.log(`Nilai Tertinggi: ${statistik.nilaiTertinggi}`);
console.log(`Nilai Terendah: ${statistik.nilaiTerendah}`);

const mahasiswaLulus = filterLulus(dataMahasiswa, 75);

console.log("\n=== Mahasiswa yang Lulus (nilai ≥ 75) ===");
mahasiswaLulus.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai}`);
});

const mahasiswaDenganGrade = tambahGrade(dataMahasiswa);

console.log("\n=== Mahasiswa dengan Grade ===");
mahasiswaDenganGrade.forEach(mhs => {
    console.log(`${mhs.nama} - ${mhs.nilai} (${mhs.grade})`);
});