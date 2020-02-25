//Map
//Filter

var a = ['a','b','c','d']

for(i=0;i<a.length;i++){
    console.log(a[i])
}

var a = ['a','b','c','d']
a.map((data) => {console.log(data)})


function add(aaa,b){
    return aaa+b
}



map always return same length of array

var a = [10,12,24,36,19,14]
a.map((data) => { return data*2})

a.filter((data) => { return data>18})
[24,36,19]
a.map((data) => { return data>18})
[false,false,true,true,true,false]


var b = [0,1,2,3,4]

b.filter((data) => { return data*2})
[1,2,3,4]
b.map((data) => { return data*2})
[0,2,4,6,8]

var city =  ["London", "NewYork", "Delhi", "Helsinki", "Hongkong", "venice"]
undefined
city.indexOf('Delhi')
2
city.indexOf('Hongkong')
4
city.indexOf('Amsterdam')
-1
city.indexOf('Innsburg')
-1

call   
bind 
apply


var person = {
    details: function(city,country){
        return this.firstname+" "+this.lastname+" "+this.city+" "+this.country
    }
}

var john={
    firstname:'john',
    lastname:'eva'
}

person.details.call(john,['London','England'])
"john eva"
person.details.apply(john)
"john eva"

person.details.call(john,['London','England'])
"john eva London,England undefined"
person.details.apply(john,['London','England'])
"john eva London England"
person.details.call(john,'London','England')
"john eva London England"
person.details.apply(john,'London','England')



function add(a,b){
    return a+b
}


add(1,2)
var john={
    firstname:'john',
    lastname:'eva'
}
add(john)

const add = function(a,b){
    return a+b
}

var a = 10

a>10?"hiiii":"biiiiee"
a>10?a+1:a-1


var a = ""
a?"hii":"bie"


var a = ""

if(a){
    
}