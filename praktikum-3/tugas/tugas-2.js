console.log("Fungsi Pangkat:");
function pangkat(b, e) {
  if (e === 0) {
    return 1;
  }
  return b * pangkat(b, e - 1);
}
console.log(pangkat(2, 3)); 
console.log(pangkat(5, 2));

function balikString(str) {
  if (str.length <= 1) {
    return str;
  }
  let karakterTerakhir = str[str.length - 1];
  let sisaString = str.slice(0, str.length - 1);
  
  return karakterTerakhir + balikString(sisaString);
}
console.log("\nFungsi Balik String:");

console.log("halo -> " + balikString("halo")); 
console.log("javascript -> " + balikString("javascript"));

function cekPalindrom(str) {
  let kataAsli = str.toLowerCase();
  let kataTerbalik = balikString(kataAsli);

  if (kataAsli === kataTerbalik) {
    return `${str} adalah palindrom.`;
  } else {
    return `${str} BUKAN palindrom.`;
  }
}
console.log("\nFungsi Cek Palindrom:");
console.log(cekPalindrom("katak")); 
console.log(cekPalindrom("civic"));
console.log(cekPalindrom("level")); 
console.log(cekPalindrom("belajar"));