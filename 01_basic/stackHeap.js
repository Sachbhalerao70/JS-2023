// stack : its store object copy inside memory
//Heap:its store object refrence inside memory

let myName="Sachin"

let changeName="Sach"
changeName="Bhalerao"

console.log(myName);
console.log(changeName);

let userOne={
    email:"sach@gmail.com",
    upi: "user@gpay"
}

let userTwo= userOne

userTwo.email="asc@gmail.com"
console.table([userOne.email,userTwo.email]);