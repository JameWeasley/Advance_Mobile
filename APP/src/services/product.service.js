class Product {
    constructor(id , name , image , price , stock) {
        this.id = id
        this.name = name
        this.image = image
        this.price = price
        this.stock = stock
    }
}

const product = [
    new Product(1 , "Macbook Pro" , "" , 90000 , 0),
    new Product(2 , "Macbook Air" , "" , 40000 , 5),
    new Product(3 , "Iphone 13 ProMax" , "" , 60000 , 10),
    new Product(4 , "Air pid" , "" , 5000 , 20),
]

let count = product.length

exports.findAll = () => product

exports.findByPrice = (min , max) => product.filter(product => product.price >= min && product.price <= max)

exports.findById = (id) => product.filter(product => product.id == id)

exports.add = (products ,file) => {
    count +=  1
    const productNew = new Product(count , products.name ,file ? file.filename : "", products.price , products.stock)
    product.push(productNew)
    return productNew
}

exports.update = (id , products, file) => {
    const index = product.findIndex(product => product.id == id)
    if (index !== -1) {
        const productUpdate = new Product(Number(id), products.name,file ? file.filename : product[index].image , products.price, products.stock)
        product[index] = productUpdate
        return productUpdate
    }
    return null
} 

exports.remove = (id) => {
    const index = product.findIndex(product => product.id == id)
    if (index !== -1) {
        product.splice(index , 1)
        return true
    }
    return false
}