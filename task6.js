// var a = [5],
//   count = 5;
// var missing = new Array();

// for (var i = 1; i <= count; i++) {
//   if (a.indexOf(i) == -1) {
//     missing.push(i);
//   }
// }
// console.log(missing)
let a = [5],
  count = 100,
  missing = []

for (let i = 1; i <= count; i++) {
  if (a.indexOf(i) === -1) {
    missing.push(i)
  }
}
console.log(missing)