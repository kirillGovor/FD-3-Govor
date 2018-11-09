
class Product {

    public storage:{};

    constructor(_serialNumber:string) {
        this.storage={};    
    }

    public addProd(name:string,weight:number):object {
        this.storage[name] = weight;
        return this.storage;
    }

    public getProd(name:string):object {
        if (name in this.storage){
            return (this.storage[name]);
        }
       
    }
    public delProd(name:string):boolean {
        if (this.storage[name]==undefined){
            return(false)
        }
        else{
            delete this.storage[name];
            return(true)
        }
        
        
    }
    public getKey():object {
        return Object.keys(this.storage);
    }
    public sumProduct():number{
        var sum:number=0;
        for (var i in this.storage){
            sum=this.storage[i]+sum;
        }
        return (sum);
    }
    
}

class Tomato extends Product {

    public addTomato(key,weight):object {
     return( this.addProd(key,weight))
    }

    public getTomato(key):object {
        return(this.getProd(key))
       }

       public delTomato(key):any {
       return(this.getProd(key))
       }
       public getkeyTomato():object {
        return(this.getKey())
       }
       public sumProductTomato():number {
        return(this.sumProduct())
       }
}

class Apple extends Product {

    public addApple(key,weight):object {
     return( this.addProd(key,weight))
    }

    public getApple(key):object {
        return(this.getProd(key))
       }

       public delApple(key):any {
       return(this.getProd(key))
       }
       public getkeyApple():object {
        return(this.getKey())
       }
       public sumProductApple():number {
        return(this.sumProduct())
       }

}
// TOMATO

function sumPomidori():void{
    
   var sum=Tomato1.sumProductTomato();
   alert("cумма всех помидор:"+sum)
}

function addPomidori():void {
    var value : { weight:number, };
    var key:string;
    var weight:number;
    key = prompt("Введите название помидору");
    weight = Number((prompt("Сколько весит?")));
    Tomato1.addTomato(key,weight);
}


function getPomidori():void {

   var elseIF:object;
    var key:string = prompt("Введите название помидоры");
    var elseIF = Tomato1.getTomato(key);
    if (elseIF != undefined) {
        alert(`
        помидора:${name}
        Вес:${elseIF}
       `);
    }
    else {
        alert(undefined);
    }
}


function delPomidori():void {
    var elseIF;
    var key:string = prompt("Ведите название поимидоры, которую хотите удалить");
    elseIF = Tomato1.delTomato(key);
    alert(elseIF);
}


function getPomidoriKey():void {

    var mass = Tomato1.getkeyTomato();
    alert("Перечень всех напитков:" + "\n" + mass);
}


let Tomato1:Tomato=new Tomato("Tomato");



//APLLE


function sumApple():void{
    
    var sum=Apple1.sumProductApple();
    alert("cумма всех яблок:"+sum)
 }
 
 function addApple():void {
     var value : { weight:number, };
     var key:string;
     var weight:number;
     key = prompt("Введите название помидору");
     weight = Number((prompt("Сколько весит?")));
     Apple1.addApple(key,weight);
 }
 
 
 function getApple():void {
 
    var elseIF:object;
     var key:string = prompt("Введите название помидоры");
     var elseIF = Apple1.getApple(key);
     if (elseIF != undefined) {
         alert(`
         помидора:${name}
         Вес:${elseIF}
        `);
     }
     else {
         alert(undefined);
     }
 }
 
 
 function delApple():void {
     var elseIF;
     var key:string = prompt("Ведите название поимидоры, которую хотите удалить");
     elseIF = Apple1.delApple(key);
     alert(elseIF);
 }
 
 
 function getAppleKey():void {
 
     var mass = Apple1.getkeyApple();
     alert("Перечень всех напитков:" + "\n" + mass);
 }
 
 
 let Apple1:Apple=new Apple("Apple");
 