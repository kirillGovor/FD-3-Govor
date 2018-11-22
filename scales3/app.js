var Scales = /** @class */ (function () {
    function Scales(StorageEngine) {
        this.products = [];
        this.StorageEngine = StorageEngine;
    }
    Scales.prototype.add = function (p) {
        this.products.push(p);
        this.StorageEngine.addItem(p);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getWeight();
        }
        return (sumScale);
    };
    Scales.prototype.getNameList = function () {
        var nameList = [];
        for (var i = 0; i < this.products.length; i++) {
            nameList.push(this.products[i].getName());
        }
        return (nameList);
    };
    return Scales;
}());
var Product = /** @class */ (function () {
    function Product(nameProduct, weight) {
        this.nameProduct = nameProduct;
        this.weight = weight;
    }
    Product.prototype.getWeight = function () {
        return (this.weight);
    };
    Product.prototype.getName = function () {
        return (this.nameProduct);
    };
    return Product;
}());
var ScalesStorageEngineLocalStorage = /** @class */ (function () {
    function ScalesStorageEngineLocalStorage() {
    }
    ScalesStorageEngineLocalStorage.prototype.addItem = function (p) {
        var product = JSON.parse(localStorage.getItem("Products"));
        product.push(p);
        localStorage.setItem("Products", JSON.stringify(product));
    };
    ScalesStorageEngineLocalStorage.prototype.getItem = function (index) {
        var product = JSON.parse(localStorage.getItem("Products"));
        return (new Product(product[index].nameProduct, product[index].weight));
    };
    ScalesStorageEngineLocalStorage.prototype.getCount = function () {
        var product = JSON.parse(localStorage.getItem("Products"));
        console.log(product);
    };
    return ScalesStorageEngineLocalStorage;
}());
var ScalesStorageEngineArray = /** @class */ (function () {
    function ScalesStorageEngineArray() {
        this.products = [];
    }
    ScalesStorageEngineArray.prototype.addItem = function (p) {
        this.products.push(p);
    };
    ScalesStorageEngineArray.prototype.getItem = function (index) {
        return (this.products[index]);
    };
    ScalesStorageEngineArray.prototype.getCount = function () {
        return (this.products);
    };
    return ScalesStorageEngineArray;
}());
var StorageEngine = /** @class */ (function () {
    function StorageEngine() {
    }
    return StorageEngine;
}());
var Scales1 = new Scales(ScalesStorageEngineArray);
var Scales2 = new Scales(ScalesStorageEngineLocalStorage);
var product1 = new Product("Продукт1", 1);
var product2 = new Product("Продукт2", 2);
var product3 = new Product("Продукт3", 3);
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
//# sourceMappingURL=app.js.map