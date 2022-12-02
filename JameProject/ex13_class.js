class Person {
    constructor(id, name) {
        this.id = id
        this.name = name
    }
    run() {
        console.log('person run')
    }
    static walk() {
        console.log('person walk')
    }
    get say() {
        return ('person say')
    }
}
class Dev extends Person {
    constructor(id, name, job) {
        super(id, name)
        this.job = job
    }
    run() {
        super.run()
        console.log('Dev: Walk');
    }
}

const obj1 = new Person(123456789, 'Hello')
const obj2 = new Person(111111111, 'Cat')
console.log(obj1)
console.log(obj2)

obj1.name = 'James'
console.log(obj1);
console.log(obj2);
obj1.run()
Person.walk()
console.log(obj1.say)

const obj3 = new Dev(12345, 'pomlormak', 'It support')
console.log(obj3);
obj3.run()