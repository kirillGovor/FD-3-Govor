interface IstorageEngine {
    addItem(item);
    getItem(index);
    getCount();
}

class Scales<StorageEngine extends IstorageEngine> {
    products: Array<Product> = [];
    StorageEngine: StorageEngine;

    constructor(StorageEngine) {
        this.StorageEngine = StorageEngine; 
    }
    add(p: Product): void {
        this.products.push(p);
        this.StorageEngine.addItem(p);
    }
    getSumScale(): number {
        let sumScale: number = 0;
        for (let i: number = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getWeight();
        }
        return (sumScale);
    }
    getNameList(): Array<String> {
        let nameList: Array<String> = [];
        for (let i: number = 0; i < this.products.length; i++) {
            nameList.push(this.products[i].getName())
        }
        return (nameList);
    }
}



class Product {
    weight: number;
    nameProduct: string;
    constructor(nameProduct: string, weight: number) {
        this.nameProduct = nameProduct;
        this.weight = weight;
    }

    public getWeight(): number {
        return (this.weight)

    }
    public getName(): string {
        return (this.nameProduct)

    }

}


class ScalesStorageEngineLocalStorage {
    addItem(p: Product) {
        let product = JSON.parse(localStorage.getItem("Products"));
        product.push(p);
        localStorage.setItem("Products", JSON.stringify(product));
    }
    getItem(index: number): Product {
        let product: Array<Product> = JSON.parse(localStorage.getItem("Products"));
        return (new Product(product[index].nameProduct, product[index].weight))
    }

    getCount() {
        let product = JSON.parse(localStorage.getItem("Products"));
        console.log(product);
    }

}
class ScalesStorageEngineArray {
    StorageEngine: StorageEngine;
    products:Array<Product>=[];
    addItem(p: Product):void {
        this.products.push(p);
    }
    getItem(index: number): Product {
    
        return (this.products[index]);
    }

    getCount():Array<Product> {
        return (this.products);
    }
}



class StorageEngine {
  
}

let Scales1: Scales<ScalesStorageEngineLocalStorage> = new Scales(ScalesStorageEngineArray);
let Scales2: Scales<ScalesStorageEngineArray> = new Scales(ScalesStorageEngineLocalStorage);

let product1: Product = new Product("Продукт1", 1);
let product2: Product = new Product("Продукт2", 2);
let product3: Product = new Product("Продукт3", 3);


Scales1.add(product1);
Scales2.add(product1);

//console.log(Tomato1.getName());
//console.log(Tomato1.getWeight());
//Scales1.add(Tomato1);

//console.log(Tomato2.getName());
//console.log(Tomato2.getWeight());
//Scales1.add(Tomato2);

//console.log(Apple1.getName());
//console.log(Apple1.getWeight());
//Scales1.add(Apple1);

//console.log(Apple2.getName());
//console.log(Apple2.getWeight());
//Scales1.add(Apple2);


console.log(Scales1.getSumScale());

console.log(Scales1.getNameList());


console.log(Scales2.getSumScale());

console.log(Scales2.getNameList());