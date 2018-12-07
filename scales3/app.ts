interface IstorageEngine {
    addItem(item: Product): void;
    getItem(index: number): Product;
    getCount(): number;
}

class Scales<StorageEngine extends IstorageEngine> {
    storageEngine: StorageEngine;

    constructor(storageEngine: StorageEngine) {
        this.storageEngine = storageEngine;
    }
    add(p: Product): void {

        this.storageEngine.addItem(p);
    }
    getSumScale(): number {
        let sumScale: number = 0;
        let storage: Product;
        for (let i: number = 0; i < 15; i++) { //временно 15
            storage = this.storageEngine.getItem(i);
            sumScale += storage.getWeight();
        }
        return (sumScale);
    }
    getNameList(): Array<String> {
        let nameList: Array<String> = [];
        let storage: Product;
        for (let i: number = 0; i < 15; i++) { // временно 15
            storage = this.storageEngine.getItem(i);
            nameList.push(storage.getName());
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
        return (this.weight);

    }
    public getName(): string {
        return (this.nameProduct);

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
        return (new Product("product[index].nameProduct", 12))
    }

    getCount(): number {
        let product = JSON.parse(localStorage.getItem("Products"));
        return (product.length);
    }

}
class ScalesStorageEngineArray {

    products: Array<Product> = [];
    addItem(p: Product): void {
        this.products.push(p);
    }
    getItem(index: number): Product {

        return (this.products[index]);
    }

    getCount(): number {
        return (this.products.length);
    }
}



class StorageEngine {
 
}

let Scales1: Scales<ScalesStorageEngineLocalStorage> = new Scales(StorageEngine);
let Scales2: Scales<ScalesStorageEngineArray> = new Scales(StorageEngine);

let product1: Product = new Product("Продукт1", 1);
let product2: Product = new Product("Продукт2", 2);
let product3: Product = new Product("Продукт3", 3);


Scales1.add(product1);
Scales1.add(product3);
Scales2.add(product1);
Scales2.add(product2);

console.log(Scales1.getSumScale());
console.log(Scales1.getNameList());


console.log(Scales2.getSumScale());
console.log(Scales2.getNameList());