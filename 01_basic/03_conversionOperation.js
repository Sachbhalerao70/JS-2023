let score="55asc"
let s="55"

let valueInNumber=Number(score) // value inside this score is a NaN = not a number  But its show number 
console.table([typeof(valueInNumber),typeof(s)]);
console.log(valueInNumber);
/*  
1.when we put score value as null: let score=null
then is convert as number and value return  as 0
2.when we put score value as undefined: let score=undefined
then is convert as number and value return  as NaN

3.when we put score value as boolen: let score=true
then is convert as number and value return  as 1

4.when we put score value as string: let score="df"
then is convert as number and value return  as NaN

"33"=>33
"99aa"=> NaN

*/

let isLogIn=0
let boo=Boolean(isLogIn)
console.log(boo);
console.log(typeof(boo));

/*
""=> false
"sach"=> true
*/
let someNumber=55
let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof(stringNumber));
