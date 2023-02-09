let roundedGrades = [];
for (let i = 0; i < grades.length; i++) {
  let grade = grades[i];
  if (grade < 38) {
    roundedGrades.push(grade);
  } else if (grade % 5 > 2) {
    roundedGrades.push(Math.ceil(grade / 5) * 5);
  } else {
    roundedGrades.push(grade);
  }
}
return roundedGrades;

// Fungsi ini bertujuan untuk membulatkan nilai ujian siswa, dengan ketentuan sebagai berikut:

// 1    Jika nilai siswa dibawah 38, maka nilainya tetap.
// 2    Jika nilai siswa tidak dibawah 38 dan tidak merupakan kelipatan 5, maka nilai dibulatkan ke atas menjadi kelipatan 5 terdekat.
// 3    Jika nilai siswa merupakan kelipatan 5, maka nilainya tetap.

// Fungsi menggunakan loop "for" untuk melakukan proses pembulatan nilai pada setiap elemen dari array "grades". Hasil dari proses pembulatan akan disimpan dalam array "roundedGrades". 
// Kemudian, fungsi mengembalikan hasil dari array "roundedGrades".
