const obj3 = {
    id: "a1234567",
    name: "Computer",
    price: "40_000"
}
const { id: productID, name, price } = obj3
console.log(`${productID}, ${name}, ${price}`)