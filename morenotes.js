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


//let exNames2 = ["Max","Has","Purple","Dog"]
for (hnng of exNames2) {
    console.log(hnng)
    if(hnng === 'Has'){
        console.log('HAS is in the list') // add break
    }
};

console.log('WAIT WHAT IS THIS ')
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

console.log('======')
function nameOfFunction(param1, param2){
    //code goes here
    const output = param1 +param2
    return output 
};
nameOfFunction(1,4)

//https://www.youtube.com/watch?v=N8ap4k_1QEQ


//           parameter   name acts as an input()  argument vs param
function greet(name, lastName){
    console.log('Hello there ' + name + ' ' + lastName);
}

greet('John');  //john is the argument
greet('Mary', 'Smith');


console.log('======')

const nameEx3 = "Dev Ed";

function logger () {
    console.log('Party Time');
    console.log('Party Time');
    console.log('Party Time');
}
logger(); // now it prints  Function invocation

function toUpper(){
    console.log('Party Time');
}





console.log('=== homework ===')


let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

//  initialization;  condition;  expression/ interation
// for (initialExpression; condition; incrementExpression
// for(let i=0; i < 5; i++)
// for(let i=0; i<5, i++)


// function findWords(str, lis) {
//     // console.log('Figure out if the current name is in the string that was passed')

//     for(namez of dog_string){
//         console.log(namez)
//         if(str === dog_string){
//             console.log('Matched with dog_name!')
//         }
//         else{
//             console.log('No Matches :[')
//         }
//     }
// };
// findWords();


function findWords(str, lis) {
    console.log('Find if string is in list basically')

    for(let i=0; i< dog_names.length; i++){
        console.log(i, dog_names[i])
        let name = dog_names[i];
        if(dog_string.includes(name)){
            console.log(`Matched with ${name}`);
        }
        else{
            console.log('No Matches :[');
        }
    }
};
findWords();


console.log('================')



let givenArr = ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(){
//     // i = givenArr.length;
//     for (let i = 0; i <givenArr.length; i++){
//         if (i % 2 !== 0) {
//             givenArr[i] = 'even index';
//         }
//     }
//     return givenArr;
//     // console.log(givenArr)
// };

let replaceEvens = (givenArr) =>{
    let i = 0;
    while (i < givenArr.length ){
        if (i % 2 !== 0){
            givenArr.splice(i, 1, 'even index');
        }
    }
    return givenArr
}

console.log(replaceEvens(givenArr));

// //let replaceEvens = (givenArr) => {
//     let i = 0;
//     while (i < givenArr.length) {
//       givenArr.splice(i, 1, "even index");
//       i += 2;
//     }
//     return givenArr;
//   };