class Person {
    constructor(id , name) {
        this.id = id
        this.name = name
    }
    run() {
        console.log("Person Run");
    }
    static walk() {
        console.log("Person Walk");
    }
    get say() {
        return ('Person say')
    }
}
class Dev extends Person { // class สืบทอด มาจาก Person class
    constructor(id , name , job) {
        super(id, name)
        this.job = job
    }
    run() {
        super.run()
        console.log("Dev run");
    }
}

const obj1 = new Person(123456789 , "BlurJung")
const obj2 = new Person(111111111 , "Cat")

console.log(obj1);
console.log(obj2);

obj1.name = "Mr.BlurJung"

console.log(obj1);
console.log(obj2);

obj1.run()
Person.walk()
console.log(obj1.say);

const obj3 = new Dev(123456789 , "IBlurMak"  , "IT Support")
console.log(obj3);
obj3.run()