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
var Product = /** @class */ (function () {
    function Product(_serialNumber) {
        this.storage = {};
    }
    Product.prototype.addProd = function (name, weight) {
        this.storage[name] = weight;
        return this.storage;
    };
    Product.prototype.getProd = function (name) {
        if (name in this.storage) {
            return (this.storage[name]);
        }
    };
    Product.prototype.delProd = function (name) {
        if (this.storage[name] == undefined) {
            return (false);
        }
        else {
            delete this.storage[name];
            return (true);
        }
    };
    Product.prototype.getKey = function () {
        return Object.keys(this.storage);
    };
    Product.prototype.sumProduct = function () {
        var sum = 0;
        for (var i in this.storage) {
            sum = this.storage[i] + sum;
        }
        return (sum);
    };
    return Product;
}());
var Tomato = /** @class */ (function (_super) {
    __extends(Tomato, _super);
    function Tomato() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Tomato.prototype.addTomato = function (key, weight) {
        return (this.addProd(key, weight));
    };
    Tomato.prototype.getTomato = function (key) {
        return (this.getProd(key));
    };
    Tomato.prototype.delTomato = function (key) {
        return (this.getProd(key));
    };
    Tomato.prototype.getkeyTomato = function () {
        return (this.getKey());
    };
    Tomato.prototype.sumProductTomato = function () {
        return (this.sumProduct());
    };
    return Tomato;
}(Product));
var Apple = /** @class */ (function (_super) {
    __extends(Apple, _super);
    function Apple() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Apple.prototype.addApple = function (key, weight) {
        return (this.addProd(key, weight));
    };
    Apple.prototype.getApple = function (key) {
        return (this.getProd(key));
    };
    Apple.prototype.delApple = function (key) {
        return (this.getProd(key));
    };
    Apple.prototype.getkeyApple = function () {
        return (this.getKey());
    };
    Apple.prototype.sumProductApple = function () {
        return (this.sumProduct());
    };
    return Apple;
}(Product));
// TOMATO
function sumPomidori() {
    var sum = Tomato1.sumProductTomato();
    alert("cумма всех помидор:" + sum);
}
function addPomidori() {
    var value;
    var key;
    var weight;
    key = prompt("Введите название помидору");
    weight = Number((prompt("Сколько весит?")));
    Tomato1.addTomato(key, weight);
}
function getPomidori() {
    var elseIF;
    var key = prompt("Введите название помидоры");
    var elseIF = Tomato1.getTomato(key);
    if (elseIF != undefined) {
        alert("\n        \u043F\u043E\u043C\u0438\u0434\u043E\u0440\u0430:" + name + "\n        \u0412\u0435\u0441:" + elseIF + "\n       ");
    }
    else {
        alert(undefined);
    }
}
function delPomidori() {
    var elseIF;
    var key = prompt("Ведите название поимидоры, которую хотите удалить");
    elseIF = Tomato1.delTomato(key);
    alert(elseIF);
}
function getPomidoriKey() {
    var mass = Tomato1.getkeyTomato();
    alert("Перечень всех напитков:" + "\n" + mass);
}
var Tomato1 = new Tomato("Tomato");
//APLLE
function sumApple() {
    var sum = Apple1.sumProductApple();
    alert("cумма всех яблок:" + sum);
}
function addApple() {
    var value;
    var key;
    var weight;
    key = prompt("Введите название помидору");
    weight = Number((prompt("Сколько весит?")));
    Apple1.addApple(key, weight);
}
function getApple() {
    var elseIF;
    var key = prompt("Введите название помидоры");
    var elseIF = Apple1.getApple(key);
    if (elseIF != undefined) {
        alert("\n         \u043F\u043E\u043C\u0438\u0434\u043E\u0440\u0430:" + name + "\n         \u0412\u0435\u0441:" + elseIF + "\n        ");
    }
    else {
        alert(undefined);
    }
}
function delApple() {
    var elseIF;
    var key = prompt("Ведите название поимидоры, которую хотите удалить");
    elseIF = Apple1.delApple(key);
    alert(elseIF);
}
function getAppleKey() {
    var mass = Apple1.getkeyApple();
    alert("Перечень всех напитков:" + "\n" + mass);
}
var Apple1 = new Apple("Apple");
//# sourceMappingURL=app.js.map