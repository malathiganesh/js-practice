var n = 12345;
var  reverse = 0;
let lastDigit;
 let t=n;
while (t!=0) 
{
    lastDigit = t % 10;
    t=t-lastDigit;
    t = t / 10;
    reverse = reverse * 10 + lastDigit;
    
}

console.log("reverse number is:"+reverse); 