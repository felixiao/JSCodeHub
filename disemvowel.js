
function disemvowel(str) {
  console.log(str.replaceAll(/[aeiou]/i,''));
}
String.prototype.replaceAll = function(search, replacement) {
    return this.replace(new RegExp(search, 'g'), replacement);
};
