Promises
========
A promise object represet eventual completion or failue of asynchronous tasks.
It will continue the process of execution and when the async task is complete it will then it will notify through callback.
It has 3 states pending, fulfilled and rejected which it maintains internally.

let promise = new Promise(function(resolve, reject){
    setTimeout(()=>{
        resolve('done');
    },5000);
});

promise.then(response=>alert(response)).catch(err=>console.log(err))

async and await
===============

This is an easy way to deal with promises, async and await provides syntactical way around Promises
async keyword wrapped around function says that the function returns a Promise.
await keyword used inside async function makes javascript wait until the promise is settled and return its result.

async function fetchData(){
    let response = await fetch('URL');
    let json = await response.json();
    return json;
}

fetchData().then(resp=>console.log(resp))
