function addProduct(name, price, stock) {
    const obj1 = {
        name,
        price, //กรณีไม่ต้องการเปลีย่นแปลงค่า ลบตัวหน้าออก
        stock: stock
    }
    console.log(obj1)
}
addProduct('James', 1_000_000, 20)


function addProduct(product) {
    const { name, price } = product
    const obj2 = {
        name,
        price, //กรณีไม่ต้องการเปลีย่นแปลงค่า ลบตัวหน้าออก
        stock: 0
    }
    console.log(obj2);
}
addProduct({ name: 'Cola', price: 1_000_000 });
