// Basics of JavaScript

/*
    Multiline Comment in JavaScript

    -- Variable Declaration in JavaScript --
    Primative Types: strings, integers, boolean, floats, arrays, objects(aka dictionaries in python)
    Functions in JavaScript
    Loops in JavaScript
*/


x= 1
y= 2
z= x+y
console.log(z)


// however the right way is to declare a variable

var x= 1
var y =2
var z= x+y;

//types
typeof z 

// to print
console.log(typeof z); 
// == number 
var w =4.4;
console.log(typeof w); // JS doesnt know floats v integers. just Numbers

/*
compile = putt everything together
JS is a compiled language
compiled languahe doesnt care about how its written
you dont need to worry about indentation, but it is impotant to use a semilcolon to show the end of the code
*/

var name1 = 'shoha'
var name2 = 'Bhoha'
var name3 = 'Brendan'

console.log(name1, name2, name3)   
console.log(typeof name1)  //string

// lists  = arrays 
var names = ['Shoha', 'brandt', 'Brenden']
console.log(names);

/* 
Array(3) [ "Shoha", "brandt", "Brenden" ]
0: "Shoha"
1: "brandt"
2: "Brenden"
length: 3
<prototype>: Array []
*/

console.log(typeof names); //object
// this is an instance of the array class 

// this object is the same kind of object in OOP
//objects are instances of classes
//wwhen you create a class 

// to check if something is an array 
Array.isArray() // this is an entire class
console.log(Array.isArray(names)); //true
console.log(Array.isArray(name1)) //false

//dictionaries in JS = JS Object (JSON) javascript standard Notation
var first_name = "Shoha"

var obj = {
    'content-type' : 'application/json',
    "grades" : [100,100,100],
    first_name : first_name,
    contenttype: 'something'
//    content-type: 'something'     JS gets confuseded by the - 

};
console.log(obj)


//JS HOISTING
//bring something to the top
console.log(random)
//random is not defined but still defined 

var random = 'random values'
console.log(random)

//the problem is that JS only tells you 'undefined' and isn't really a proper error message telling  you what went wrong


//Declare, define, unassigned

var num; //i am declaring num
console.log(num)
num =1; //assigning value
console.log(num)
num = null
console.log(num)


console.log('example')

//instead of using VAR, use LET and CONST
//LET and CONST do not hoist
let random2 = 'random values..'
console.log(random2)

console.log(random2) //Uncaught ReferenceError: can't access lexical declaration 'random2' before initialization

 console.log('const')
const random3 = 'random values....'
console.log(random3)

console.log(random3) //can't access lexical declaration 'random3' before initialization

// LET and CONST are both used as variable declarations 
// it is the newer ES6 Syntax
let fave_num =10;
const fav_color = 'blue';

//CONST value cannot be reassigned. 
console.log(fave_num)
console.log(fav_color)
fave_num += 13
console.log(fave_num) //23
//fav_color = 'red'

//use it until you have to use LET
//LET and CONST are also block level declarations 
//let fave_num //Uncaught SyntaxError: redeclaration of let fave_num


/*     --- MATH OPERATIONS ---*/
console.log('=====MATH STUFF=====')
//addition
let sum =5 + 6;
console.log (sum)
sum+= 7;
console.log(sum)
sum++; //single incremement
console.log(sum)

// Subtraction
let diff = 15 - 5; // let diff -= 5
console.log(diff) //10
diff -=4; //6
console.log(diff)
diff --; //5
console.log(diff)

// Multiplication
let product = 5 * 5; // let product *= 5
console.log(product)
product *=2;
console.log(product);

// Division
let quo = 100 / 5; // let divide /= 5
console.log(quo)
quo /=4;
console.log(quo)

//Exponential
let square = 5**2;
console.log(square)
square**=2;
console.log(square)


// More math 
// you dont have to import any Math package

const floor = Math.floor(23.7)
console.log(floor)
const ceil = Math.ceil(24.7)
console.log(ceil)

//intersting behavior
console.log('interesting')

const num1=2 
const num2 = "3"
const res = num1 + num2
console.log(res) //=23
console.log(typeof res) //string !

// parseInt() and parseFloat()
// int() and float()  still integers 

console.log(parseInt('24.7'), typeof parseInt('24.7')); // 24 number
console.log(parseFloat('24.7'), typeof parseFloat('24.7')); //24.7 number



/* JAVASCRIPT FUNCTIONS */

console.log('===== Functions =====')
//regularly named function
function nameOfFunction(param1, param2){
    //code goes here
    const output = param1 +param2
    return output 
};



// const res2 = nameOfFunction(100,200)
console.log(nameOfFunction(100,200))
console.log(nameOfFunction('Le', 'Bron'))

//nameless function 
const squareMe = function (num){
    return num**2
};
console.log(squareMe(7))


console.log('new syntax of creating functions: ')
// arrow function is the new 3S6 syntax way of creating functions 
// format: 
//      () => {}
//      ( params go here ) => { this is the code block }
//      const cubeMe = () => {};
const cubeMe = (num) => {
    return num **3
};
console.log(cubeMe(3))

//arrow function with no params

//if only 1 param, the parenthesis are optional () 
// const arroww1 = num => {return 'this function does nothing'}
const arroww1 = num => {return num**2};
console.log(arroww1(9)) //81

//with Two or More params
const arroww2 = (num1, num2) => {return num1 + num2};
console.log(arroww2(9, 999)) 

//arrow func with SINGLE Line (meaning we only have a return line)
//curly braces are optional, 
//no return keyword neededd 

const a4 = (num1, num2) => num1 + num2;
console.log(a4(8, 888)) 


let cubed2 = num => num ** 3;
console.log(cubed2(4))
console.log()

//scope is still a thing
let test = 1;
const testFunc = () => {
    let test =4;
    console.log(test)
};
console.log(test);
testFunc();


//seld invoking functions
// (()=>{});

(()=>{
    console.log('this was self-invoked... meaning i created a nameless function then ran it')
})();

//another one with function keyword
(function (){console.log('DJ Khaled')})()

console.log()

const outer = () => {
    let counter = 0  //private evariable
    const inner = () => {
        counter ++
        return counter
    };
    return inner //setter function
}

const addToCounter = outer()
console.log(addToCounter())
console.log(addToCounter())
console.log(addToCounter())

//every time you run the outer function, you are creating a local variable 
//its almost like creating an instance


console.log('======= IF STATEMENTS =======')

//SYNTAX     if { condition } { code block } 
const ifTest = num =>{
    if (num<10) {
        console.log('small number')
    }
    else if ( num < 20 ) {
        console.log('medium number')
    }
    else {
        console.log('big number')
    };
};
ifTest(5);
ifTest(15);
ifTest(30);

// ternary operators
// PYTHON: ( DO THIS IF TRUE ) if CONDITION         else ( DO THIS IF FALSE)
// JS:  ( CONDITION ) ? ( DO THIS IF TRUE ) : ( DO THIS IF FALSE )

// const getFree = isMember => isMember ? '2.00' : '10.00'
const getFree1 = (isMember) => {
    return isMember ? '2.00' : '10.00'
};
//                                     if true  false
const getFree2 = isMember => isMember ? '2.00' : '10.00'

console.log(getFree1(true)) //not in JS, boolean "true" is spelt lowercase
console.log(getFree2(false))


console.log('======== FOR LOOPS ========')
// for (let variable; condition; incrementor) { codeblock }
const countByOne = (stop) =>{
    for(let i=1; i< stop; i++){
        if (i==3){
            console.log('fave number', i)
        }
        else {
            console.log(i)
        }
    }
};
countByOne(9)

const goThroughArray = (arr) => {
    for (let i = 0; i < arr.length; i++){ 
//      ther is no len func, its an attribute   want to go through everything in list
        const person = arr[i]
        console.log(person, i)
}
};
goThroughArray(['Shoha', 'Brandt', 'Aubrey', 'Brendan'])


//ES6 version
//for syntax
const goThroughArray2 = (arr) => {

}


console.log('======== WHILE LOOPS ========')
// syntax :  while { condition } { codeblock };

const countUpTo = num=> {
    let i = 0;
    while (i < num) {
        console.log(i);
        i++;
    }
    console.log('done')
}; 
countUpTo(5)

//JS extra feature.. Do While
// do while , will always occure once. even if condition is not met

//syntax:   do { codebock } while { condition }

const countUpToDo = num=> {
    let i = 0;
    do {
        console.log(i);
        i++;
    }
    while (i < num)
    console.log('done')
}; 
countUpToDo(5)


//array methods
let arrNames = ['Shoha' ,'brandt', 'aubrey']
arrNames.push('Brendan')
console.log(arrNames)
console.log(arrNames[-1])
console.log(arrNames[arrNames.length -1])
console.log(arrNames.toString()) //turns into a string 
console.log(arrNames.join('###'))
console.log(arrNames.slice(1,3)) // i want index 1:3 (before 3)


//splice 

// const output = arrNames.splice(1) //removes everything from 1 tothe end
// console.log(output)
// console.log(arrNames, 'arrNames')

const output2 = arrNames.splice(1, 2, 'ghost of Brandt', 'ghost of aubrey') //
console.log(output2)
console.log(arrNames, 'arrNames')



console.log('=======')
//  initialization;  condition;  expression/ interation
//   i = index;  keep going until this condition is false
for(let i=0; i < 5; i++) {
    console.log('Loop' + i) //will keep going until false 
    if (i ===3 ) break; // breaks at 3
};

//loop through an array 
let exNames = ["Max","Has","Purple","Dog"]

// for (let i=0; i <exNames.length; i++){
//     console.log(exNames[i]);
// }

for (name of exNames) {
    console.log(name);
}

console.log('=======')
//for loop
//  initialization;  condition;  expression/ interation
// for (initialExpression; condition; incrementExpression)
//    statement
for (let i = 0; i < 5; i++) {   // as long as i <5 it will execute 
    console.log('Hello World', i); // to show the increments, use i
};
console.log('=======');

for (let i = 1; i < 5; i++) {   
    console.log('Hello World', i); 
};

console.log('=== display odd numbers 1-5 ====');

for (let i=1; i <=5; i++){
    if (i % 2 !== 0) console.log(i);
// check the remainder of i %2 
// if the remainder is not 0, it's an odd number 
}; 
console.log('=== odd numbers reverse  ====')

for (let i=5; i >= 1; i--){
    if (i % 2 !== 0) console.log(i);
}

console.log('=====')

let exNames2 = ["Max","Has","Purple","Dog"]
for (hnng of exNames2) {
    console.log(hnng, exNames2.length)
}
console.log('=====')
// for (initialExpression; condition; incrementExpression)
// for (let i=0; i <exNames.length; i++)
for (hnng of exNames2) {
    console.log(`Hello there ${hnng}`)
};
console.log('=====')
for (hnng of exNames2) {
    console.log(hnng)
    if(hnng === 'Has'){
        console.log('HAS is in the list') // add break
    }
};
/*
function { funcNameHere } ( { parameteres } ) {
    codeblock when funcNameHere is called
    optional => return { something }; 
}
*/
function nameHere(num1, num2){
    return num1 + num2;
}
console.log(nameHere(1, 2)); //3

function routine(tod){
    if (tod === 'am'){

        console.log('wake up (6am)');

        for(let i = 1; i <4; i++){
            console.log('brush', i);
        }
        console.log('done brushing');
        console.log('editing');

    } else if (tod === 'pm'){

        for(let i = 1; i <4; i++){
            console.log('brush', i);
        }
        console.log('done brushing');
        console.log('sleep');
    }
}
routine('am');
routine('pm');

// function nameOfFunction(param1, param2){
//     //code goes here
//     const output = param1 +param2
//     return output 
// };
// nameOfFunction(1,4)

console.log('=== homework ===')
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]
//  initialization;  condition;  expression/ interation
// for (initialExpression; condition; incrementExpression
// for(let i=0; i < 5; i++)
function findWords() {
}