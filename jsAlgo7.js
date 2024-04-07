const rows = 5;
const cols = 4;
let n = 5;
let star = "";

for (let i = n; i >= 1; i--) {
  for (let j = 1; j <= i; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
