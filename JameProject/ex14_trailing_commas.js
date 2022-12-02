const array1 = [1, 2, 3, 4]
console.log(array1)
console.log(array1.length)

const array2 = [1, , , ,]
console.log(array2)
console.log(array2.length)

array2.forEach(item => {
    console.log('***********')
})
for (item of array2) {
    console.log('##########')
}




function addProduct(name,) {
    const obj1 = {
        name,
        stock: 0,
    }
    console.log(obj1)
}

addProduct('hHello World')