// O(n) time | O(n) space
function ceasarCipherEncryptor(input, key) {
  const minifiedKey = key % 26;
  return Array.from(input).map((char) => {
    const nlc = char.charCodeAt(0) + minifiedKey;
    if (nlc <= 122) return String.fromCharCode(nlc);
    else return String.fromCharCode(96 + (nlc % 122));
  });
}

console.log(encryptor('xyz', 2));
