const output = document.getElementById('fizz');
const whatever = [];

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) whatever.push("FizzBuzz");
  else if (i % 3 === 0) whatever.push("Fizz");
  else if (i % 5 === 0) whatever.push("Buzz");
  else whatever.push(i);
}

output.innerHTML = whatever.join("<br>");