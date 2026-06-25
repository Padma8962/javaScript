console.log(Object.getOwnPropertyDescriptor(Math, 'PI')); // This will show the property descriptor for Math.PI, which is a static property of the Math object.
// Output: { value: 3.141592653589793, writable: false, enumerable: false, configurable: false }


const chai = {
    name :'ginger chai',
    price : 250,
    isAvailable : true
}

console.log(chai);
console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // This will show the property descriptor for the 'name' property of the chai object.
// Output: { value: 'ginger chai', writable: true, enumerable: true, configurable: true }

Object.defineProperty(chai, 'name', {
    writable: false,
    enumerable: true, //try with false and see the difference in output of for loop below
    configurable: false
});

console.log(Object.getOwnPropertyDescriptor(chai, 'name')); // This will show the updated property descriptor for the 'name' property of the chai object.
// Output: { value: 'ginger chai', writable: false, enumerable: false, configurable: false }




for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}