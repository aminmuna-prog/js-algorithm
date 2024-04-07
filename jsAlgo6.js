const rows = 5;
const cols = 4;

let star = "";

for (let i = 1; i <= rows; i++) {
  for (let j = 1; j <= cols; j++) {
    star += "*";
  }
  star += "\n";
}

console.log(star);
