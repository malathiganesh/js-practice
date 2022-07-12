
gen=prompt("enter gender:");
age=prompt("enter age");
if(gen=="m")
{
    if(age>=21)
    console.log("eligible for marriage"); 
    else
    console.log("not eligible for marriage");
}
else if(gen=="f"){
    if(age>=18)
    console.log("eligible for marriage");
    else
    console.log("not eligible for marriage");
}