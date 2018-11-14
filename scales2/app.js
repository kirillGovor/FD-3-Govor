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
var Tomato = /** @class */ (function () {
    function Tomato(nameProduct, weight) {
        this.products = [];
        this.nameProduct = nameProduct;
        this.weight = weight;
    }
    Tomato.prototype.getWeight = function () {
        return (this.weight);
    };
    Tomato.prototype.getName = function () {
        return (this.nameProduct);
    };
    return Tomato;
}());
var Apple = /** @class */ (function () {
    function Apple(nameProduct, weight) {
        this.products = [];
        this.nameProduct = nameProduct;
        this.weight = weight;
    }
    Apple.prototype.getWeight = function () {
        return (this.weight);
    };
    Apple.prototype.getName = function () {
        return (this.nameProduct);
    };
    return Apple;
}());
var Scales1 = new Scales();
var Tomato1 = new Tomato("Красный томат", 18);
var Tomato2 = new Tomato("Желтый томат", 18);
var Apple1 = new Apple("Красное яблоко", 12);
var Apple2 = new Apple("Зеленое яблоко", 15);
console.log(Tomato1.getName());
console.log(Tomato1.getWeight());
Scales1.add(Tomato1);
console.log(Tomato2.getName());
console.log(Tomato2.getWeight());
Scales1.add(Tomato2);
console.log(Apple1.getName());
console.log(Apple1.getWeight());
Scales1.add(Apple1);
console.log(Apple2.getName());
console.log(Apple2.getWeight());
Scales1.add(Apple2);
console.log(Scales1.getSumScale());
console.log(Scales1.getNameList());
//# sourceMappingURL=app.js.map