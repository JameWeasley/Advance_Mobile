function rest1(name, params) {
    console.log(params)
    console.log(arguments)
    console.log(arguments[3])
    const item = [...arguments]
    console.log(item)
    console.log(item[0])
}
rest1('Hello', 1000, 10_000, 100_000)
function rest2(name, ...rest) {
    console.log(name)
    console.log(rest)
    console.log(rest[0])
}

rest2('Hello', 1000, 10_000, 100_000)