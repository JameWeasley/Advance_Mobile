const array1 = ['Hello', 'Cat']

const normalFunc1 = array1.filter(function (item) {
    return item === 'Hello'
})

const arrowFunc1 = array1.filter(function (item) =>
item === 'Hello'
)
console.log(normalFunc1)
console.log(arrowFunc1)

const