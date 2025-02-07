// const radius =[2,4,3]

// const area = function(radius){
//     return Math.PI * radius * radius
// }

// const circumference = function(radius){
//     return 2 * Math.PI * radius
// }

// const diameter = function(radius){
//     return 2 * radius
// }

// const circle = function(radius, logic){
//     const output = []
//     for(let i = 0; i<radius.length; i++){
//         output.push(logic(radius[i]))

//     }
//     return output;

// }

// console.log(circle(radius, area));
// console.log(circle(radius, circumference));
// console.log(circle(radius, diameter));


// // map()
// const arr = [1,2,3,4,5]
// const output = arr.map((num) => num +=10)   // map() method creates a new array with the results of calling a provided function on every element in the calling array.uses arrow function.
// console.log(arr);
// console.log(output);


// filter()

// const arr = [1,2,3,4,5];
// const output = arr.filter((num) => num % 2)  // filter() method creates a new array with all elements that pass the test implemented by the provided function. uses arrow function.
// console.log(arr);
// console.log(output);


// reduce()
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((total, currentValue) => {
    return total + currentValue;
}, 0)  // reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value. uses arrow function.

console.log(sum);

// example 2
let num = [5, 60, 100, 20, 340];
const maxvalue = num.reduce((max, currentValue) =>{
    if(currentValue > max)
        max = currentValue;
    return max;
})
console.log(maxvalue);


// example 3
const obj1={a:1, b:2};
const obj2={c:3, d:4};
const obj3={e:5, f:6};
const mergeObj = [obj1, obj2, obj3].reduce((obj, currentObj) => {
    return {...obj, ...currentObj}          // ... is a spread operator that merges and gives expanded output.
}, {})

console.log(mergeObj);


// example 4

const shoppingCart = [
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Apple', price: 1.99, quantity: 3},
    {name: 'Xiomi', price: 2.99, quantity: 2},
    {name: 'Samsung', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 3.99, quantity: 1},
    {name: 'Tesla', price: 4.99, quantity: 4},
    {name: 'Nokia', price: 4.99, quantity: 4},
]

const products = shoppingCart.reduce((productGroup, product) => {
    const name = product.name;
    if(productGroup[name] == null) {
        productGroup[name] = [];
    }
    productGroup[name].push(product);

    return productGroup;
}, {});

console.log(products);