// let a = ["a", "x", "b", "N", "c"];
const a = "axbNc";
let res = [];
for (let i = 0; i < a.length; i++) {
  res.push(a[i].toLowerCase());
}
console.log(res.sort().join(""));
// console.log(a.sort().join(""));
