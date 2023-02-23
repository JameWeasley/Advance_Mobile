const router = require('express').Router()


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

router.get("/products" , function(req , res) {
    res.json(product)
})

router.get("/products/:id" , function(req , res) {
    const result = product.filter(product => product.id == req.params.id)
    if (result.length > 0 ) {
        res.json(result[0])
    }else {
        res.json(404).json({})
    }
})

router.get("/products/price" , function(req , res) {
    const {min , max} = req.query;
    const result = product.filter(product => product.price >= min && product.price <= max)
    res.json(result)

})

router.post('/products' , (req ,res) =>{
    const {name, price , stock} = req.body
    count +=  1
    const product_current = new Product(count , name ,"" , price , stock)
    product.push(product_current)
    res.status(201).json(product_current)
})

router.put('/products/:id' , (req , res) => {
    const id = req.params.id
    const index = product.findIndex(product => product.id == id)
    if (index !== -1) {
        const {name , price , stock} = req.body
        const product_current = new Product(Number(id) , name , "" , price , stock)
        product[index] = product_current
        res.json(product_current)
    } else {
        res.status(404).json({})
    }
})

router.delete('/products/:id' , (req , res) => {
    const id = req.params.id
    const index = product.findIndex(product => product.id == id)
    if (index !== -1) {
        product.splice(index , 1)
        res.status(204).json()
    } else {
        res.status(404).json({})
    }
})

// export ไปให้ส่วนอื่นเรียกใช้ router ได้
module.exports = router