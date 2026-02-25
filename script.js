console.log("hello world");
document.write("hello world");

var num=10;
console.log(num);
console.log(typeof(num));
num=false;
console.log(num);
console.log(typeof(num));
num="hello";
console.log(num);
console.log(typeof(num));
num=null;
console.log(num);
console.log(typeof(num));
num=String;
console.log(num);
console.log(typeof(num));

let x;
console.log(x);
console.log(typeof(x));

     //symbol type
const sym1=symbol(4)
console.log(sym1);
const sym2=symbol(4);
console.log(sym2);
if(sym1==sym2){
    console.log("true");
}
else{
console.log("false");
}