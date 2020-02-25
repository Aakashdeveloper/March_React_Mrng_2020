Ecam Script 5 
Ecam Script 6
(Base for Scripting)

//Variables//
var a = 10

var a ("Declaring")
a = 10 ("assignment")

//es5
var => It can be redeclare and reassign

//es6
let => We cannot redeclare but can reassign
const=> We cannot redeclare but nor reassign

////////////
String =>  "2335436", 'ddgfgff', "dff345gd", 'true'
Number =>  10, 238758932758, 735.876356, 38657836276573657
Boolean =>  true/false   1/0

var x = "john"
typeof(x)
"string"
var x = 10.99
typeof(x)
"number"
var x = 10
typeof(x)
"number"
var x = true
typeof(x)
"boolean"

//////Operations/////
var a = 10
var b = 2
a+b
a-b
a*b
a/b
a%b
10
b%a
2

//////////////////
var a = "Hi "
var b = "JavaScript"

** '+' with string conact 
** "'+" with number add 


var a = "Hi "
var b = "JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN


var a = "Hi "
var b = "JavaScript"
undefined
a+b
"Hi JavaScript"
a-b
NaN
a*b
NaN
a/b
NaN


string+string = string
string+number = string
number+string = string
number+number = number

10+10+"10"
"10"+10+10
10+"10"+10

10+10+"10"
"2010"
"10"+10+10
"101010"
10+"10"+10
"101010"


10+10+"10"-1

10+10+"10"-1
2009
"a"-1
NaN
"10"-1
9
"10"*2
20
"a"*2
NaN
2010-1
2009
"10a"-1
NaN

//Es5
var a = 10
var b = "My age is "+a
"My age is 10"

//Es6
var a = 10
var b = `My age is ${a}`
"My age is 10"

///Function////
//Es5
function add(a,b){
    return a+b
};
add(1,2);

//Es6
const add = (a,b) => { return a+b }
add(1,2)

class Add {
    constructor(a,b){
        this.sum = a+b
    }
}


var sum = new Add(1,2);

///
Map
Filter 


0 = false
1 = true