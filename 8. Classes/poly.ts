class A{

    add():number{
        console.log("a class method")
        return 10;
    }
    
}

class B extends A{
    add():number{
        console.log("b class method")
        return 10;
    }
}