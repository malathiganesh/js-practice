var tamil =100;
var english =95;
var maths =90;
let total=(tamil+english+maths);
let avrg=(total/3);
console.log("average:",avrg);
if(avrg<=100 && avrg>=90)
{
    console.log("A grade");
} 
else if(avrg<=89 && avrg>=75)
{
    console.log("B grade");
}else{
    console.log("C grade");
}