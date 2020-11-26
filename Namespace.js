//namespace is used for using same name of variable multiple times
//By modularising whole code in certain ammount of code
var Todo;
(function (Todo) {
    Todo.greet = (name) => `Hello ${name}`;
})(Todo || (Todo = {}));
(function (Todo) {
    var service;
    (function (service) {
        var greet = Todo.greet;
        greet("Shintu");
        const todo = { name: "Go home", completed: true };
        console.log(todo);
    })(service = Todo.service || (Todo.service = {}));
})(Todo || (Todo = {}));
//# sourceMappingURL=Namespace.js.map