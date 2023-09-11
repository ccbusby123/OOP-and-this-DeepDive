//this is a keyword that is used to reference the object that is executing the current running function.
//Used alone, this refers to the global object.
//this within a function, it will refer to the function name.
//this within an arrow function will refer to the nearest function's scope object. If none, it will look to the global scope (window)

//this refers to the window object
function codelabs () {
console.log (this);
}
codelabs();