var num = 243; // number
var str = 'test'; // string
var bool = true; // boolean
var arr = ['1', 2]; // object
var obj = { a: 1, b: 2 }; // object
var nu = null; // object
var und = undefined; // undefined
var func = function () {}; // function


// --- Hoisting
// Hoisting - setup memory space for Variables and Functions

// ------ Variables
// In case, if variable is declared but have no value - its will be undefined (ex. 1).
// In case, if you call variable before you assign value, you will also get undefined (ex. 2).

// ------ Functions (Functions expression)
// Function expression same as variable - if you try to call it before declaration, you will ger undefined (ex. 3).
// Console.log after function declaration will show you what var contain, but not execute this function (ex. 4).
// For execution function expression, need to add () after function name and call must be after function declaration (ex. 5).

// ------ Functions
// All much easy. You can get access in anywhere. When JS compiler start, he put it to the memory but not execute them.
// So when you try to get access to this function, you can do it even if call stands before function physically (ex. 6-7).

// ex. 1
var a;
// console.log( a );

// ex. 2
var b = 1;
// console.log( b );

// ex. 3
// console.log( funcExpr );
var funcExpr = function() {
    console.log('Show express func');
};

// ex. 4
var funcExprA = function() {
    console.log('Show express func');
};
// console.log( funcExprA );

// ex. 5
var funcExprB = function() {
    console.log('Show express func');
};
// console.log( funcExprB() );

// ex. 6
function normalFunc() {
    console.log('Show normal func');
}
// normalFunc();

// ex. 7
// normalFuncB();
function normalFuncB() {
    console.log('Show normal func');
}