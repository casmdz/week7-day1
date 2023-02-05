//==================Exercise #1 ==========//
/*Write a function that 
    takes in the string and the list of dog names, 
    loops through the list and 
    checks that the current name is in the string passed in.      
    The output should be: "Matched dog_name" if name is in the string, if no matches are present console.log "No Matches"
make it case sensitive or not ,say it doesnt match
*/
let dog_string = "Hello Max, my name is Dog, and I have purple eyes!"
let dog_names = ["Max","HAS","PuRple","dog"]

// for (let variable; condition; incrementor) { codeblock }


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





//============Exercise #2 ============//
/*Write a fucntion that takes in an array and removes every even index with a splice,
and replaces it with the string "even index" */

// Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]

// function replaceEvens(arr){
//     //code goes here
// }

//Expected output
//Given arr == ["Max","Baseball","Reboot","Goku","Trucks","Rodger"]
//Output arr == ["even index","Baseball","even index","Goku","even index","Rodger"]
