a=10;
b=9;
c=8;
let x;
let y;
let z;
if(a>b&&a>c)
{
    x=a;
}
else if(b>a&&b>c)
{
    x=b;
}else{
    x=c;
}
if(a<b&&a<c)
{
    z=a;
}
else if(b<a&&b<c)
{
    z=b;
}else{
    z=c;
}
y=a+b+c-(x+z)
console.log("ascending order:",x,y,z);
console.log("discending order:",z,y,x);