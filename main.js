// const fibonacci = require('./lib/fibonacci')
// console.log(fibonacci(1));
function isLeapYear(n){
    if(n%400===0){
        return true
    }

    if(n%100===0){
        return false
    }

    if(n%4===0){
        return false
    }
    return false
}

// console.log("2000:"+isLeapYear(2000));
// console.log("1900:"+isLeapYear(2000));
// console.log("1995:"+isLeapYear(2000));
// console.log("2018:"+isLeapYear(2000));

// const fibonacci=require('./lib/fibonacci')

// for(var i=1;i<20;i++){
//     console.log(fibonacci(i));
// }


const anagram=require('./lib/anagram')
var str="abc"
console.log(anagram(str));

