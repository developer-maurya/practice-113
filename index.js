console.log("hii Object");

let student ={
    age :20,
    name :"Chitranjan Maurya",
    class:"Bca",
    gender :"Male"

}
console.log(student);
console.log(student.age);
console.log(student.gender);

// spread operator
let str = "Chitranjan"
console.log(...str);

let obj ={
    name:"Chitranjan",
    // age:20,
    gender:"Male"
}

console.log(...obj.name);

let obj1 ={
    // name:"Niraj",
    age:25,
}

let objSum ={
    ...obj,
    ...obj1,
    home:"Bahuara"
}

console.log(objSum);
