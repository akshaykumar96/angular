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
//variable declarations
//1.constants
var company = "manipal";
console.log(company);
//1-string,number,boolean.any,null types are available
var location1 = "10";
//2-block scoped variables
for (var index = 0; index < 10; index++) { }
console.log(index); //accessible outside the block
for (var i = 0; i < 10; i++) { }
//console.log(i);// outside access is not allowed by using let
var myname = "akshay";
//myname=10;//nothing can be assigned to same variable name in let
//3-Templated string
var a = 10, b = 20, sum = 0;
console.log("sum of" + a + " + " + b + " = " + sum); //traditional way of fomatting
console.log("sum of " + a + "+" + b + "= " + sum); //ts way of formatting using expression language and backquotted symbol
//4. Functions
function myfunc(arg1) {
    return "HELLO" + arg1;
}
myfunc("Manipal");
console.log("Function returns : " + myfunc("Manipal"));
//5. Spread and rest operators
var fruits = ["mango", "orange", "apples"];
function printfruits(arg1, arg2, arg3) {
    console.log("fruits 1:" + arg1 + ", 2:" + arg2 + ", 3:" + arg3);
}
//printfruits(fruits[0], fruits[1],fruits[2])// traditional way of printing array
var _a = fruits.slice(), x = _a[0], y = _a[1], z = _a[2]; // spread operation ---destructuring
printfruits(x, y, z);
//REST operator
function collectValues() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    console.log("Arguments are:" + args);
}
collectValues(1, 2, 3, 4, 5);
//6. Arrow functions=>
var array = [1, 2, 3, 4, 5];
var newArray = array.map(function (value) { return value + 10; });
console.log("original Array " + array + ", updated array:" + newArray);
//7. creating class
var Student = /** @class */ (function () {
    function Student(num, name, gender, section) {
        this.section = section;
        this.rollno = num; //by default it is public
        this.name = name;
        this.gender = gender;
    }
    Student.prototype.showDetails = function () {
        console.log("rollno: " + this.rollno + ", Name: " + this.name + ",Gender: " + this.gender);
    };
    return Student;
}());
var myobj = new Student(10, 'akshay', 'male', 'first sem');
myobj.showDetails();
myobj.rollno = 101;
myobj.showDetails();
var baseclass = /** @class */ (function () {
    function baseclass(name) {
        this.baseclassNmae = name;
    }
    baseclass.prototype.showDetails = function () {
        console.log("From base class");
    };
    return baseclass;
}());
var derivedClass = /** @class */ (function (_super) {
    __extends(derivedClass, _super);
    function derivedClass(baseName, myname) {
        var _this = _super.call(this, baseName) || this;
        _this.myname = myname;
        return _this;
    }
    derivedClass.prototype.showDetails = function () {
        console.log("base value: " + this.baseclassNmae);
        console.log("child value: " + this.myname);
    };
    return derivedClass;
}(baseclass));
var dc = new derivedClass("Base class", "derived class");
var bc = new baseclass("Base class");
dc.showDetails();
bc = dc;
bc.showDetails();
var interfaceimpl = /** @class */ (function () {
    function interfaceimpl() {
    }
    interfaceimpl.prototype.showDetails = function () {
        console.log("Interface method implemented");
    };
    interfaceimpl.prototype.anothermethod = function () {
        return "NOTHING";
    };
    return interfaceimpl;
}());
var obj1 = new interfaceimpl();
var intfobj = obj1;
intfobj.showDetails();
//intfobj.anothermethod();
obj1.anothermethod();
obj1.showDetails();
//transpile the code using tsc command
//node to execute the file
