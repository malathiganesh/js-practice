var number = prompt("Enter a number");
numberOfDigits = number.length;
d=0;
let t=number;
while (t > 0) {
  r = t % 10;
  t = parseInt(t/10);
  d += r**numberOfDigits;
}
if (d==number)
   console.log("given number is an armstrong number");
else
   console.log("given number is not an armstrong number");