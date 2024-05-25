// 9 - herança
class ProductWithAttributes extends Products{
    constructor(name, price,colors){
        super(name, price)
        this.colors = colors
    }

    showColors(){
        console.log("As cores são:")
        this.colors.forEach((color) =>{
            console.log(color)
        })
    }
}

const hat = new ProductWithAttributes("Chapéu", 29.99, [
    "Preto",
    "Azul",
    "Verde"
])

console.log(hat.name)

console.log(hat.productWithDiscount(30))

hat.showColors()

