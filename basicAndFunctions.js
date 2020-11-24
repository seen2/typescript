//defining types by interface
const h = "hello";
console.log(h);
const user = {
    name: "Steve",
    id: 0,
};
//==>
class UserAccount {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const userA = new UserAccount("Steve", 12);
function getAddminUser() {
    //code
    return new UserAccount("Shintu", 09);
}
function deleteUser(user) {
    //code
}
function greetUser(name) {
    console.log("Hello,", name);
}
greetUser(1);
greetUser("Steve");
function greet(person) {
    return typeof person === "string" ? person : { name: "Jhon Doe", id: person };
}
console.log("Hello", greet("Sam"));
console.log("Hello", greet(123));
//a is string here
const a = backpack.get();
function printPoint(p) {
    console.log(`${p.x}, ${p.y}`);
}
// prints "12, 26"
const point = { x: 12, y: 26 };
printPoint(point);
// The point variable is never declared to be a Point type. However, TypeScript compares the shape of point to the shape of Point in the type-check. They have the same shape, so the code passes.
// The shape-matching only requires a subset of the object’s fields to match.
const point3 = { x: 12, y: 26, z: 89 };
printPoint(point3); // prints "12, 26"
const rect = { x: 33, y: 3, width: 30, height: 80 };
printPoint(rect); // prints "33, 3"
//error
// const color = { hex: "#187ABF" };
// printPoint(color);
//Array
//1
let list = [1, 2, 3];
//2
let numList = [1, 2, 3];
//Tupple
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// When accessing an element with a known index, the correct type is retrieved:
console.log(x[0].substring(1));
//Accessing an element outside the set of known indices fails with an error.
//enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(c);
//By default, enums begin numbering their members starting at 0. You can change this by manually setting the value of one of its members. For example, we can start the previous example at 1 instead of 0:
var Clr;
(function (Clr) {
    Clr[Clr["Red"] = 1] = "Red";
    Clr[Clr["Green"] = 2] = "Green";
    Clr[Clr["Blue"] = 3] = "Blue";
})(Clr || (Clr = {}));
let col = Clr.Green;
//Or, even manually set all the values in the enum:
var Colr;
(function (Colr) {
    Colr[Colr["Red"] = 1] = "Red";
    Colr[Colr["Green"] = 2] = "Green";
    Colr[Colr["Blue"] = 4] = "Blue";
})(Colr || (Colr = {}));
let cl = Colr.Green;
//Unknown types
let notSure = 4;
notSure = "maybe a string instead";
// OK, definitely a boolean
notSure = false;
//Any
//Unlike unknown, variables of type any allow you to access arbitrary properties, even ones that don’t exist.
let looselyTyped = 4;
// OK, ifItExists might exist at runtime
let strictlyTyped = 4;
// OK, return value of 'getValue' is not checked
const str = getValue("myString");
// Void
// void is a little like the opposite of any: the absence of having any type at all. You may commonly see this as the return type of functions that do not return a value:
function warnUser() {
    console.log("This is my warning message");
}
// Declaring variables of type void is not useful because you can only assign null (only if --strictNullChecks is not specified, see next section) or undefined to them:
let unusable = undefined;
// OK if `--strictNullChecks` is not given
unusable = null;
// Null and Undefined
// In TypeScript, both undefined and null actually have their types named undefined and null respectively. Much like void, they’re not extremely useful on their own:
// Not much else we can assign to these variables!
let u = undefined;
let n = null;
// By default null and undefined are subtypes of all other types. That means you can assign null and undefined to something like number.
// Never
// The never type represents the type of values that never occur.
// The never type is a subtype of, and assignable to, every type; however, no type is a subtype of, or assignable to, never (except never itself). Even any isn’t assignable to never.
// Function returning never must not have a reachable end point
function error(message) {
    throw new Error(message);
}
// Inferred return type is never
function fail() {
    return error("Something failed");
}
// Function returning never must not have a reachable end point
function infiniteLoop() {
    while (true) { }
}
// Object
// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, bigint, symbol, null, or undefined.
// Type assertions
// Sometimes you’ll end up in a situation where you’ll know more about a value than TypeScript does.
// Type assertions have two forms.
// One is the as-syntax:
let someValue = "this is a string";
let strLength = someValue.length;
// The other version is the “angle-bracket” syntax:
let someVal = "this is a string";
let strLen = someVal.length;
function createSquare(config) {
    let newSquare = { color: "white", area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: "black" });
// You can construct a Coordinates by assigning an object literal. After the assignment, x and y can’t be changed.
let p1 = { x: 10, y: 20 };
// p1.x = 5; // error!
let arr = [1, 2, 3, 4];
let ro = arr;
// readonly vs const
// The easiest way to remember whether to use readonly or const is to ask whether you’re using it on a variable or a property.
//Excess Property Checks
function createSqr(config) {
    return {
        color: config.color || "red",
        area: config.width ? config.width * config.width : 20,
    };
}
//error
//let mySqr = createSqr({ colour: "red", width: 100 });
// Getting around these checks is actually really simple. The easiest method is to just use a type assertion:
//1
let mySqr = createSqr({ width: 100, opacity: 0.5 });
mySqr = createSqr({ colour: "red", width: 100 });
let mySearch;
mySearch = function (source, subString) {
    let result = source.search(subString);
    return result > -1;
};
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
// Had the function expression returned numbers or strings, the type checker would have made an error that indicates return type doesn’t match the return type described in the SearchFunc interface.
mySearch = function (src, sub) {
    let result = src.search(sub);
    return result > -1;
};
let myArray;
myArray = ["Bob", "Fred"];
let myStr = myArray[0];
let myArr = ["Alice", "Bob"];
class Clk {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d) {
        this.currentTime = d;
    }
}
function createClock(ctor, hour, minute) {
    return new ctor(hour, minute);
}
class DigitalClock {
    constructor(h, m) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock {
    constructor(h, m) { }
    tick() {
        console.log("tick tock");
    }
}
let digital = createClock(DigitalClock, 12, 17);
let analog = createClock(AnalogClock, 7, 32);
let square = {};
square.color = "blue";
square.sideLength = 10;
// Interfaces Extending Classes
class Control {
}
class Button extends Control {
    select() { }
}
class TextBox extends Control {
    select() { }
}
//error Class 'ImageControl' incorrectly implements interface 'SelectableControl'.
// class ImageControl implements SelectableControl {
//   Types have separate declarations of a private property 'state'.
//   private state: any;
//   select() {}
// }
//Funtions
//HOF
let myAdd = function (x, y) {
    return x + y;
};
// myAdd has the full function type
let myAdd2 = function (x, y) {
    return x + y;
};
//Optional and Default Parameters
//We can get this functionality in TypeScript by adding a ? to the end of parameters
function buildName(firstName, lastName) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
//default initialized parameters
// we can also set a value that a parameter will be assigned if the user does not provide one, or if the user passes undefined in its place
function buildsName(firstName, lastName = "Smith") {
    return firstName + " " + lastName;
}
let result1 = buildsName("Bob"); // works correctly now, returns "Bob Smith"
let result2 = buildsName("Bob", undefined); // still works, also returns "Bob Smith"
//Default-initialized parameters that come after all required parameters are treated as optional, and just like optional parameters, can be omitted when calling their respective function.
// Unlike plain optional parameters, default-initialized parameters don’t need to occur after required parameters.
//Rest Parameters
function buildNames(firstName, ...restOfName) {
    return firstName + " " + restOfName.join(" ");
}
// employeeName will be "Joseph Samuel Lucas MacKinzie"
let employeeName = buildNames("Joseph", "Samuel", "Lucas", "MacKinzie");
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    // NOTE: The function now explicitly specifies that its callee must be of type Deck
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert("card: " + pickedCard.card + " of " + pickedCard.suit);
class Handler {
    onClickBad(e) {
        // oops, used `this` here. using this callback would crash at runtime
        this.info = e.message;
    }
    onClickGood(e) {
        // can't use `this` here because it's of type void!
        console.log("clicked!");
    }
}
let handler = new Handler();
let uiElement;
// uiElement.addClickListener(handler.onClickBad); // error!
uiElement.addClickListener(handler.onClickGood); //fixed
//Overloads
//supply multiple function types for the same function as a list of overloads. This list is what the compiler will use to resolve function calls.
let suits = ["hearts", "spades", "clubs", "diamonds"];
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
//# sourceMappingURL=basicAndFunctions.js.map