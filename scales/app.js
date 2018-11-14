var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Scales = /** @class */ (function () {
    function Scales() {
        this.products = [];
    }
    Scales.prototype.add = function (p) {
        this.products.push(p);
    };
    Scales.prototype.getSumScale = function () {
        var sumScale = 0;
        for (var i = 0; i < this.products.length; i++) {
            sumScale += this.products[i].getWeight();
        }
        return (sumScale);
    };
    Scales.prototype.getNameList = function () {
        var nameList = "";
        for (var i = 0; i < this.products.length; i++) {
            nameList += this.products[i].getName() + ";  ";
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
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(nameProduct, weight) {
        return _super.call(this, nameProduct, weight) || this;
    }
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(nameProduct, weight) {
        return _super.call(this, nameProduct, weight) || this;
    }
    return Apple;
}(Product));
var Scales1 = new Scales();
var Tomato1 = new Tomato("Красный томат", 18);
var Tomato2 = new Tomato("Желтый томат", 18);
var Apple1 = new Apple("Красное яблоко", 12);
var Apple2 = new Apple("Зеленое яблоко", 15);
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
//# sourceMappingURL=app.js.map