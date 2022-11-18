if (true) {
    let let1 = 'Hello'
}
console.log('let1 :' + let1);


if (true) {
    let let2 = 'Hello World'
    console.log("let2 ก่อนเปลี่ยน : " + let2);
}
let2 = "cat"
console.log("let2 หลังเปลี่ยน : " + let2);



const const1 = "Me"
if (true) {
    const const1 = "Cat"
}
console.log('const1 :' + const1)




const const2 = []
const2.push("My name is James")
console.log("const2 :" + const2);
const2.push("Im 20 year old")
console.log("const2 :" + const2);


const const3 = {}
const3.name = 'James'
const3.age = 20
const3.height = 175
console.log("const :" + JSON.stringify(const3));
console.log(JSON.stringify(const3));