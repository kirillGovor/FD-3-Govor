
class Scales {

     storage:object;
    nameProduct:string;
    scale:number;
    allProduct:object
    constructor(storage:object,nameProduct:string,scale:number,) {
        this.storage={}; 
        nameProduct=this.nameProduct;
        scale=this.scale;
    }

    public add():void {
       
        this.storage[this.nameProduct]=this.scale; 
       console.log("Продукт добавлен")
    }

 

 
     getNameList():void {
      console.log(this.storage)

    }
     getSumScale():void{
        var sum:number=0;
        for (var i in this.storage){
            sum=this.storage[i]+sum;
        }
        console.log(sum);
    }
    
}

class Product extends Scales{
    scale:number;
    nameProduct:string;
    constructor(nameProduct:string,scale:number) {
        super(Scales,nameProduct,scale); 
        this.nameProduct=nameProduct;
        this.scale=scale;
    }

public getScale (){
    console.log("Вес продукта "+ this.storage[this.nameProduct])

}
public getName(){
    console.log("Имя продукта "+ this.nameProduct)
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

let Scale1:Scales=new Scales({},"",0)


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

Tomato1.getNameList();


Scale1.getSumScale();






