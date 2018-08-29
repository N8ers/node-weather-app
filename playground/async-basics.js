//sync code will always go in order
//async code is more maliable / non-blocking

console.log('Starting app');

setTimeout(() => {
    console.log('Inside of call back');
}, 2000);
//asyncronos call back, it let's the program do other things before it prints
//this is none blocking I/O

setTimeout(() => {
    console.log('Second setTimeout');
}, 0);
//this is called after 'Finishing up' - why?!
//cause, 

console.log('Finishing up');

//in the above example starting app, finishing app, THEN inside call back
//because it has a delay

//In real life, when we fetch data from google API, it'll take time to get data
//We don't want the app idle, we want it to carry on until it gets the data
//So we'll register a call back for the google servers!


//why does the 2 second delay not prevent the rest of the app from 
//

//why does the 0 second delay appear after the 'Finishing up'?
//it needs to wait for the call stack to end before hitting it!


//syncronus example
var x = 1;
var y = x + 9;
console.log(`y is ${y}`);
//call stack -> can add stuff to top of it, can remove top item -> 
//like a can of pringles, add and remove from top

var add = (a, b) => {
    var total = a+b;
    return total;
};

var res = add(3, 8);

console.log(res);

