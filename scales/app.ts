
class Scales {
    nameProduct:string;
    weight:number;
    products:Product[];
    
    constructor(nameProduct:string,weight:number) {
        this.nameProduct=nameProduct;
        this.weight=weight;
        this.products=this.products
    }


    public add(Product){
       var name= this.nameProduct;
       var weight = this.weight;
       this.products.push(Product)
        console.log(this.products);
    }
}


class Product extends Scales {
    constructor(nameProduct:string,weight:number) { 
       super(nameProduct,weight);
    }
    weight:number;
    nameProduct:string;
    

public getWeight (){
    console.log(this.weight)

}
public getName(){
    console.log(this.nameProduct)
    
}
    
}




class Tomato extends Product {
    nameProduct:string;
    weight:number;
    constructor(nameProduct:string,weight:number) {
        super(nameProduct,weight); 
       
    }
}

class Apple extends Product {

    nameProduct:string;
    weight:number;
   
    constructor(nameProduct:string,weight:number) {
        super(nameProduct,weight); 
    }
}

let Scales1:Scales=new Scales("1",2);

let Tomato1:Tomato=new Tomato("Красный томат",18);
let Tomato2:Tomato=new Tomato("Желтый томат",18);
let Apple1:Apple=new Apple("Красное яблоко",12);
let Apple2:Apple=new Apple("Зеленое яблоко",15);




//Tomato1.add();
Tomato1.getName();
Tomato1.getWeight();
Scales1.add(Tomato1);



//Tomato2.add();
Tomato2.getName();
Tomato2.getWeight();
Scales1.add(Tomato2);

//Apple1.add();
Apple1.getName();
Apple1.getWeight();
Scales1.add(Apple1);

//Apple2.add();
Apple2.getName();
Apple2.getWeight();
Scales1.add(Apple2);






