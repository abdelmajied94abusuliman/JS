let string = "";
let increment = 1;

for (x = 0; x < 4; x++) {
  for (i = 0; i <= x; i++) {
    string += increment;
    increment++;
  }

  string += "\n";
}

console.log(string);
