// const myArr= [0,2,8,2,7,6]
// //we cant access array element using string we accesed element using index
// //console.log(myArr["one"]); wrong
// // console.log(myArr[0]); 

// // shallow copy=== heap share same refrence chnage original copy 

// // deep copy=== stack
// // const myAr1=new Array(1,2,5,4)


// const heros=["Iron ","man","thor"]
// const bike=["DUKE","KTM","thar"]

// // heros.push("sach")
// // bike.push(heros)
// // console.log(heros);
// // console.log(bike);// [ 'DUKE', 'KTM', 'thar', [ 'Iron ', 'man', 'thor', 'sach' ] ] 
// // // we want to accese thor element then we simple ued following sytnx

// // console.log(bike[3][2]);

// const newArr=bike.concat(heros)
// console.log(newArr);//[ 'DUKE', 'KTM', 'thar', 'Iron ', 'man', 'thor' ] 

// concat = return one new array not changing existing arr

//spread= separate everyting

// const newHeros=[...heros,...bike]
// console.log(newHeros);// 'Iron ', 'man', 'thor', 'DUKE', 'KTM', 'thar' ]


// const anthorArr=[1,5,8,8,9,5,6,3,[4,7,8[5,5,5,2]]]

// const readableArray=anthorArr.flat(Infinity);
// console.log(readableArray); // flat used for non readable array same like this above ex it reutrn readbale formate

console.log(Array.isArray("Sachu"));//false
console.log(Array.from("Sachu"));//[ 'S', 'a', 'c', 'h', 'u' ] it convert that string into array

console.log(Array.from({name:"Sachu"}))// always give =[] empty array  bcoz we have give info type array we want key or another we have to specify


let score1=100
let score3=300

let score2=200

console.log(Array.of(score1,score2,score3));//[ 100, 200, 300 ] give ew array set form element



