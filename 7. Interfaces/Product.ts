interface Product{
    id:number;
    name:string;
    description:string;
    price?:number;
    display():void;
}

var product1:Product = {
    id:123,
    name:"IPhone",
    description:"Its awesome",
    display():void{
        console.log(this.id+" "+this.name+ "" +this.description);
    }
}


var product2:Product = {
    id:123,
    name:"IPhone",
    description:"Its awesome",
    display():void{
        console.log(this.id+" "+this.name);
    }
}

