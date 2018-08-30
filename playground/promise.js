// what is a promise? A FUNCTION WITH AN ARGUMENT
// Makes it easier to manage asyncronis computations

//promise chaining, say you wanna a take an address, turn into cooridinates
//and take them into weather information - an example of needing to sync 2 things


var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve(a + b);
            } else {
                reject('Arguments must be numbers');
            }
        }, 1500);
    });
};

asyncAdd(5, '7').then((res) => {
    console.log('result: ', res);
    return asyncAdd(res, 33);
}, (errorMessage) => {
    console.log(errorMessage);
}).then((res) => {
    console.log('Should be 45, ', res);
}, (errorMessage) => {
    console.log(errorMessage);
}).catch((errorMessage) => {
    console.log(errorMessage);
});

// var somePromise = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Hey, it worked!'); //value promise is fulfilled with
//         // reject('Unable to fulfill promise');
//     }, 2500);
// });

// somePromise.then((message) => {
//     console.log('Success: ', message);
// }, (errorMessage) => {
//     console.log('Error: ', errorMessage);
// });