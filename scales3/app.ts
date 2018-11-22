interface IstorageEngine {
    addItem(item:Product):void;
    getItem(index:number):Product;
    getCount():Array<Product>;
}

class Scales<StorageEngine extends IstorageEngine> {
    storageEngine: StorageEngine;

    constructor(StorageEngine) {
        this.storageEngine = StorageEngine; 
    }
    add(p: Product): void {
     
        this.storageEngine.addItem(p);
    }
    getSumScale(): number {
        let sumScale: number = 0;
        for (let i: number = 0; i <15; i++) { //временно 15
            sumScale += this.storageEngine[i].getWeight();
        }
        return (sumScale);
    }
    getNameList(): Array<String> {
        let nameList: Array<String> = [];
        for (let i: number = 0; i < nameList.length; i++) { // временно nameList.length
            nameList.push(this.storageEngine[i].getName())
        }
        return (nameList);
    }
}



class Product {
   private weight: number;
   private nameProduct: string;
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
        return (new Product("product[index].nameProduct", 2))
    }

    getCount():Array<Product> {
        let product = JSON.parse(localStorage.getItem("Products"));
        return (product);
    }

}
class ScalesStorageEngineArray {

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


console.log(Scales1.getSumScale());

console.log(Scales1.getNameList());


console.log(Scales2.getSumScale());

console.log(Scales2.getNameList());