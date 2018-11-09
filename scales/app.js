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
    function Scales(storage, nameProduct, scale) {
        this.storage = {};
        nameProduct = this.nameProduct;
        scale = this.scale;
    }
    Scales.prototype.add = function () {
        this.storage[this.nameProduct] = this.scale;
        console.log("Продукт добавлен");
    };
    Scales.prototype.getNameList = function () {
        console.log(this.storage);
    };
    Scales.prototype.getSumScale = function () {
        var sum = 0;
        for (var i in this.storage) {
            sum = this.storage[i] + sum;
        }
        console.log(sum);
    };
    return Scales;
}());
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product(nameProduct, scale) {
        var _this = _super.call(this, Scales, nameProduct, scale) || this;
        _this.nameProduct = nameProduct;
        _this.scale = scale;
        return _this;
    }
    Product.prototype.getScale = function () {
        console.log("Вес продукта " + this.storage[this.nameProduct]);
    };
    Product.prototype.getName = function () {
        console.log("Имя продукта " + this.nameProduct);
    };
    return Product;
}(Scales));
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato(nameProduct, scale) {
        return _super.call(this, nameProduct, scale) || this;
    }
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple(nameProduct, scale) {
        return _super.call(this, nameProduct, scale) || this;
    }
    return Apple;
}(Product));
var Tomato1 = new Tomato("Красный томат", 18);
var Tomato2 = new Tomato("Желтый томат", 18);
var Apple1 = new Apple("Красное яблоко", 12);
var Apple2 = new Apple("Зеленое яблоко", 15);
var Scale1 = new Scales({}, "", 0);
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
//# sourceMappingURL=app.js.map