Reducing
=======

let cart = [{item:'IPhone', cost:100000},{item:'IPhone Charger',cost:2000},{item:'headphone',cost:5000}];

if you want to calculate the total amount of transaction array reduce method can be used.

const amount = cart.reduce(function(total,item){
    return total+item.cost;
},0);

duplicate
=========

let setOfStrings = ['a','abc','ab','abc','abcd'];
let uniqueStrings = [];
for (let index = 0; index < setOfStrings.length; index++) {
    if(uniqueStrings.indexOf(setOfStrings[i])<0){
        uniqueStrings.push(setOfStrings[i]);
    }
}


flatten an Array
================

let array = [1,2,[3,4,[5,6,7]]];

function flattenArray(array){
    let flatArray = [];

    for (let index = 0; index < array.length; index++) {
        if(Array.isArray(array[index])){
            flatArray.push(...flattenArray(array[index]))
        }else{
            flatArray.push(array[index]);
        }
    }
    return flatArray;
}
