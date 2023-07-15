class Student{
   private _name:string;
    _pass:string;

   display(){
       console.log(this._name);
   }

   get pass():string{
     return this._pass;
   }

   set pass(pass:string){
    this._pass =pass;
  }

   get name():string{
    return this._name;
   }

   set name(name:string){
       this._name = name;
   }
}

var student = new Student();
student.name = "Bob";
student.pass ="";
console.log(student.name);

student._pass =" ";

