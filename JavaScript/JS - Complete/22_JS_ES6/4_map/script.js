// 4 - map
const products = [
    { name: 'Camisa', prince: 10.99, category: 'Roupas' },
    { name: 'Chaleira Elétrica', prince: 49.99, category: 'Eletro' },
    { name: 'Fogão', prince: 400, category: 'Eletro' },
    { name: 'Calça', prince: 50.99, category: 'Roupas' },
]

products.map((products) => {
    if(products.category === 'Roupas'){
        products.onSale = true
    }
})

console.log(products)

