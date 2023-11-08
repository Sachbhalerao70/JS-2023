// //Dates
// let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toISOString());


// console.log(typeof(myDate)); // object

// let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate);

// console.log(myCreatedDate.toString());
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleDateString());
// console.log(myCreatedDate.toISOString());


// let myCreatedDate = new Date(2023,0,23,5,3)

// console.log(myCreatedDate.toLocaleDateString());//1/23/2023

// console.log(myCreatedDate.toLocaleString());// 1/23/2023, 5:03:00 AM

// let myCreatedDate = new Date("2023-01-04")
// console.log(myCreatedDate.toLocaleString())


// let myTimeStamp = Date.now()
// console.log(myTimeStamp);//1699417474476 mili secound

// console.log(myCreatedDate.getTime());

// if (myCreatedDate>myTimeStamp) {
//     console.log("myCreated winn");
    
// }
// else{
//     console.log("myTimestamp winn");
// }  gaming tech


// console.log(Math.round(Date.now()/1000));// we want convert into second that time we divide actual time in 1000 then we get second 


let newDate=new Date()

console.log(newDate.getMonth()+1);

newDate.toLocaleString('default',{
    weekday:"long",
    
})
console.log(newDate);
