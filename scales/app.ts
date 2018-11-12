
class Scales {
    nameProduct:string;
    scale:number;

    constructor(nameProduct:string,scale:number) {
        this.nameProduct=nameProduct;
        this.scale=scale;
    }


    public add(){
        var Product = new Array(); 
        Product.push(this.nameProduct,this.scale); 
        console.log(Product);
    }
}


class Product extends Scales {
    constructor(nameProduct:string,scale:number) {
        super(nameProduct,scale); 
       
    }
    scale:number;
    nameProduct:string;
    

public getScale (){
    console.log(this.scale)

}
public getName(){
    console.log(this.nameProduct)
}
    
}




class Tomato extends Product {
    nameProduct:string;
    scale:number;
    constructor(nameProduct:string,scale:number) {
        super(nameProduct,scale); 
       
    }
}

class Apple extends Product {

    nameProduct:string;
    scale:number;
    constructor(nameProduct:string,scale:number) {
        super(nameProduct,scale); 
    }
}



let Tomato1:Tomato=new Tomato("Красный томат",18);
let Tomato2:Tomato=new Tomato("Желтый томат",18);
let Apple1:Apple=new Apple("Красное яблоко",12);
let Apple2:Apple=new Apple("Зеленое яблоко",15);




Tomato1.add();
Tomato1.getName();
Tomato1.getScale();



Tomato2.add();
Tomato2.getName();
Tomato2.getScale();

Apple1.add();
Apple1.getName();
Apple1.getScale();

Apple2.add();
Apple2.getName();
Apple2.getScale();







