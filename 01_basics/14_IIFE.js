// Immmediately Invoked Function Expression(IIFE)
// defined and executed immediately after it is created.
// need : The variable  exists only inside the IIFE and doesn't pollute the global scope.
(function chai(){
    console.log('DB connected')
})();    //semi colon important

(function(name){
    console.log("Hello "+name)
})("Padmaja");

// Arraw Function IIFE
(() => {
    console.log("Arrow IIFE");
})();

(function () {
    let counter = 0;

    function increment() {
        counter++;
        console.log(counter);
    }

    increment();
    increment();
})();