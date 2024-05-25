class Retangulo{
    constructor(largura, altura){
        if(largura <= 0 || altura <= 0){
            throw new Error("A largura ou a altura devem ser numeros maiores que zero!");
        }
        this.largura = largura;
        this.altura = altura;
    }
    
    calcularArea(){
        return this.largura * this.altura;
    }
    
    calcularPerimetro(){
        return 2 * (this.largura + this.altura);
    }
}


const retangulo1 = new Retangulo(5, 10);
console.log(`Area: ${retangulo1.calcularArea()}`);
console.log(`Perimetro: ${retangulo1.calcularPerimetro()}`);