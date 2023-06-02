// Fungsi untuk menggabungkan dua string dengan spasi di antaranya
function concatenateStrings(str1, str2) {
  if (!str1) {
    str1 = "";
  }
  if (!str2) {
    str2 = "";
  }
  return str1 + " " + str2;
}

// Pengujian kasus-kasus khusus pada fungsi concatenateStrings
console.log(concatenateStrings("Hello", "World")); // Output: "Hello World"
console.log(concatenateStrings("Hello")); // Output: "Hello "
