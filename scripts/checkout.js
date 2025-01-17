import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProducts, loadProductsFetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";
//import '../data/cart-class.js'
//import '../data/backend-practice.js'

async function loadPage() { //makes the function return a promise
    try {
        //throw 'error 1';

        await loadProductsFetch(); //await lets us write asynchronous code like normal code
        //we can only use await when we are inside an async function
        // the closest func has to be async
        
        const value = await new Promise((resolve, reject) =>{ // reject is a func that lets us create an error in the future
            // throw 'error 2'
            loadCart(() => {
                // reject('error 3')
                resolve('value 3');
            });
        });

    } catch (error) {
        console.error('Unexpected error. Please try again later.');
    }
    

    renderOrderSummary();
    renderPaymentSummary(); 

}
loadPage();
    

// Promise.all([
//     loadProductsFetch(),
//     new Promise((resolve) =>{
//         loadCart(() => {
//             resolve();
//         });
//     }),

// ]).then((values)=>{
//     console.log(values);
//     renderOrderSummary();
//     renderPaymentSummary(); 
// });

// new Promise((resolve) => { //similar to done function, lets us control when to go to the next step
//     loadProducts(() => {
//         resolve('value1');
//     });

// }).then((value) =>{

//     console.log(value);
//     return new Promise((resolve) =>{
//         loadCart(() => {
//             resolve();
//         });
//     });

// }).then(() =>{
//     renderOrderSummary();
//     renderPaymentSummary(); 
// });

// loadProducts(() =>{
//     loadCart(() => {
//         renderOrderSummary();
//         renderPaymentSummary();
//     });
// });

