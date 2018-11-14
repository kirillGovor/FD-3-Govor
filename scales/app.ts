
class Scales {
    nameProduct:string;
    weight:number;
    products:Array<Product>=[];
    


    public add(p:Product):void{
        this.products.push(p)
    }
    getSumScale():number{
       let sumScale:number=0;
       for (let i:number=0;i<this.products.length;i++){
        sumScale+=this.products[i].getWeight();
       }
       return(sumScale);
    }
    getNameList():string{
        let nameList:string="";
        for (let i:number=0;i<this.products.length;i++){
            nameList+=this.products[i].getName()+";  ";
        }
        return(nameList);
    }
}


class Product {
    weight:number;
    nameProduct:string;
    constructor(nameProduct:string,weight:number) { 
        this.nameProduct= nameProduct;
        this.weight=  weight;
    }
   
    

public getWeight():number{
   return(this.weight)

}
public getName():string{
    return(this.nameProduct)
    
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

let Scales1:Scales=new Scales();

let Tomato1:Tomato=new Tomato("Красный томат",18);
let Tomato2:Tomato=new Tomato("Желтый томат",18);
let Apple1:Apple=new Apple("Красное яблоко",12);
let Apple2:Apple=new Apple("Зеленое яблоко",15);




//Tomato1.add();
console.log(Tomato1.getName());
console.log(Tomato1.getWeight());
Scales1.add(Tomato1);



//Tomato2.add();
console.log(Tomato2.getName());
console.log(Tomato2.getWeight());
Scales1.add(Tomato2);

//Apple1.add();
console.log(Apple1.getName());
console.log(Apple1.getWeight());
Scales1.add(Apple1);

//Apple2.add();
console.log(Apple2.getName());
console.log(Apple2.getWeight());
Scales1.add(Apple2);


console.log(Scales1.getSumScale());

console.log(Scales1.getNameList());

