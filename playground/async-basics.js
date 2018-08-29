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