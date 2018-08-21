//variable declarations
//1.constants
const company ="manipal";
console.log(company);
//1-string,number,boolean.any,null types are available
const location1:string ="10";
//2-block scoped variables
for (var index =0 ;index<10; index++){}
console.log(index);//accessible outside the block
for(let i=0;i<10;i++)
{}
//console.log(i);// outside access is not allowed by using let
let myname:string ="akshay";
//myname=10;//nothing can be assigned to same variable name in let
//3-Templated string
let a:number =10, b:number =20,sum: number=0;
console.log("sum of" + a +" + "+ b +" = " +sum);//traditional way of fomatting
console.log(`sum of ${a}+${b}= ${sum}`);//ts way of formatting using expression language and backquotted symbol
//4. Functions
function myfunc(arg1: string):string{ //use never for infinite loop 
    return "HELLO" + arg1;
}myfunc ("Manipal");
console.log(`Function returns : ${myfunc("Manipal")}`);
//5. Spread and rest operators
let fruits = ["mango","orange","apples"];
function  printfruits(arg1,arg2,arg3){
console.log(`fruits 1:${arg1}, 2:${arg2}, 3:${arg3}`);
}
//printfruits(fruits[0], fruits[1],fruits[2])// traditional way of printing array
let[x,y,z]=[...fruits];// spread operation ---destructuring
printfruits(x,y,z);
//REST operator
function collectValues(...args){
    console.log(`Arguments are:${args}`);
}
collectValues(1,2,3,4,5);
//6. Arrow functions=>
let array =[1,2,3,4,5];
let newArray= array.map((value)=>value+10);
console.log(`original Array ${array}, updated array:${newArray}`);
//7. creating class
class Student{
rollno: number;
name:string;
gender:string;

constructor(num:number,name:string,gender:string,private section:string)
{
    this.rollno=num;//by default it is public
    this.name=name;
    this.gender=gender;

}
showDetails(){
console.log(`rollno: ${this.rollno}, Name: ${this.name},Gender: ${this.gender}`);
}

}
let myobj= new Student(10,'akshay','male','first sem');
myobj.showDetails();
myobj.rollno=101;
myobj.showDetails();

class baseclass{

    baseclassNmae:string;
    constructor(name:string)
    {
        this.baseclassNmae=name;

    }
    showDetails()
    {
        console.log("From base class");
    }
}

class derivedClass extends baseclass{
 constructor(baseName:string, private myname:string)
 {
     super(baseName)
 }

showDetails()
{
    console.log(`base value: ${this.baseclassNmae}`);
    console.log(`child value: ${this .myname}`);
}
}

let dc =  new derivedClass("Base class","derived class");
let bc =  new baseclass("Base class");
dc.showDetails();
bc=dc;
bc.showDetails();
//8- interface
interface Ibase{
    showDetails(): void;
}
class interfaceimpl implements Ibase{
showDetails():void {
    console.log("Interface method implemented");
}
anothermethod()
{
    return "NOTHING";
}
}
let obj1= new interfaceimpl();
let intfobj = obj1 as Ibase;
intfobj.showDetails();
//intfobj.anothermethod();
obj1.anothermethod();
obj1.showDetails();



//transpile the code using tsc command
//node to execute the file