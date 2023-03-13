"use strict";
//const names1: any= [];
//const name2:Array<string>=[];
// genric type
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
// if any is used as genric type then promise will return any type of data 
// we should use appropriate data type like string , number etc 
promise.then(data => {
    data.split('');
});
function countLength(element) {
    let descriptionText = "Got this email";
    if (descriptionText.length == 1) {
        descriptionText = "Got 1 Element";
    }
    else if (descriptionText.length > 1) {
        descriptionText = "Got " + element.length + " elementes";
    }
    return [element, descriptionText];
}
console.log(countLength(['sportes', 'cooking'])); //(2) [Array(2), 'Got 2 elementes']
//"Got 2 elementes"
// Keyof Constrain
// we want to get object and ites  key
//here key ectend obj .for that we use keyof constrain
function extractAndConvert(obj, key) {
    return "value=" + obj[key];
}
const ert = extractAndConvert({ name: ' Krishna ' }, 'name');
console.log(ert); //value= Krishna  
